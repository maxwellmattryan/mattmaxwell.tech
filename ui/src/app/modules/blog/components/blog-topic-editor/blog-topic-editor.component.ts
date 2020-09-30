import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiService } from '@ui/core/http';
import { AuthService } from '@ui/core/auth';
import { NotificationService } from '@ui/core/services';

import { BlogTopic } from '../../models';
import { BlogTopicEditorService } from '../../services';

@Component({
    selector: 'app-blog-topic-editor',
    templateUrl: './blog-topic-editor.component.html'
})
export class BlogTopicEditorComponent implements OnInit, OnDestroy {
    topicData: BlogTopic;
    topicForm: FormGroup;

    isLoaded: boolean = false;

    constructor(
        private apiService: ApiService,
        private authService: AuthService,
        private blogTopicEditorService: BlogTopicEditorService,
        private formBuilder: FormBuilder,
        private notificationService: NotificationService,
        private titleService: Title,
        private router: Router,
    ) { }

    ngOnDestroy(): void {
        this.blogTopicEditorService.setTopic(null);
    }

    ngOnInit(): void {
        this.titleService.setTitle('Blog Topic Editor | Matthew Maxwell');

        this.checkForAdmin();

        this.setPageHideEvent();

        this.initTopicForm();
    }

    private checkForAdmin(): void {
        if(!this.authService.isLoggedIn())
            this.router.navigate(['/']);
    }

    private setPageHideEvent(): void {
        window.onpagehide = () => {
            this.blogTopicEditorService.setTopic(null);
        };
    }

    private initTopicForm(): void {
        this.loadTopicData();

        this.buildTopicForm();
    }

    private loadTopicData(): void {
        this.topicData = this.blogTopicEditorService.getTopic();
        this.isLoaded = true;
    }

    private buildTopicForm(): void {
        if(this.topicData) {
            this.topicForm = this.formBuilder.group({
                name:        this.formBuilder.control(this.topicData.name,        [Validators.required]),
                description: this.formBuilder.control(this.topicData.description, [Validators.required]),
            });
        } else {
            this.topicForm = this.formBuilder.group({
                name:        this.formBuilder.control('', [Validators.required]),
                description: this.formBuilder.control('', [Validators.required]),
            });
        }
    }

    onSubmit(): void {
        const topic = this.buildFormTopicData();

        if(topic.id === undefined) {
            this.apiService.createTopic(topic).subscribe((res: BlogTopic) => {
                this.notificationService.createNotification('Successfully created new topic.');
                this.router.navigate(['blog'])
            }, (error: HttpErrorResponse) => {
                this.notificationService.createNotification(error.error.message);
            });
        } else {
            this.apiService.updateTopic(topic).subscribe((res: BlogTopic) => {
                this.notificationService.createNotification('Successfully updated existing topic.');
                this.router.navigate(['blog'])
            }, (error: HttpErrorResponse) => {
                this.notificationService.createNotification(error.error.message);
            });
        }
    }

    buildFormTopicData(): BlogTopic {
        return new BlogTopic({
            ...this.topicForm.value,
            id: this.topicData ? this.topicData.id : undefined
        });
    }
}
