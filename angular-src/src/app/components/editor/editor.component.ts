import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Post, Topic } from 'src/app/models';

import { BlogService, EditorService, ValidationService } from '../../services';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    post: Post;
    postForm: FormGroup;

    topics: Array<Topic> = [];

    constructor(
        private blogService: BlogService,
        private editorService: EditorService,
        private formBuilder: FormBuilder,
        private validationService: ValidationService
    ) { }

    ngOnInit(): void {
        this.post = this.editorService.getPost();
        if(this.post) {
            this.postForm = this.formBuilder.group({
                title: this.formBuilder.control(this.post.title, [Validators.required]),
                subtitle: this.formBuilder.control(this.post.subtitle, [Validators.required]),
                topics: this.formBuilder.array([], this.validationService.hasMinTopics(1)),
                author: this.formBuilder.control(this.post.author, [Validators.required]),
                description: this.formBuilder.control(this.post.description, [Validators.required]),
                content: this.formBuilder.control(this.post.content, [Validators.required]),
                imageURL: this.formBuilder.control(this.post.imageURL, [Validators.required])
            });
        } else {
            this.postForm = this.formBuilder.group({
                title: this.formBuilder.control('', [Validators.required]),
                subtitle: this.formBuilder.control('', [Validators.required]),
                topics: this.formBuilder.array([], this.validationService.hasMinTopics(1)),
                author: this.formBuilder.control('', [Validators.required]),
                description: this.formBuilder.control('', [Validators.required]),
                content: this.formBuilder.control('', [Validators.required]),
                imageURL: this.formBuilder.control('', [Validators.required])
            });
        }

        this.blogService.getTopics().subscribe(topics => {
            this.topics = topics;

            this.topics.forEach((topic, idx) => {
                let control;
                
                if(this.post && this.post.topics.map(t => t.name).includes(topic.name)) {
                    control = this.formBuilder.control(1);
                } else {
                    control = this.formBuilder.control(0);
                }

                (this.postForm.controls.topics as FormArray).push(control);
            });
        });
    }

    onSubmit() {
        console.log(this.postForm);
        const selectedTopics = this.postForm.value.topics
            .map((topic, idx) => topic ? this.topics[idx] : null)
            .filter(topic => topic !== null);

        console.log(selectedTopics);
    }
}
