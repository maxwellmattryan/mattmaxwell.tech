import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/modules/material/material.module';

import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';

import {
    PostEditorComponent,
    ProfileEditorComponent,
    ProjectEditorComponent,
    TopicEditorComponent
} from './components';

@NgModule({
    declarations: [
        EditorComponent, 
        PostEditorComponent,
        ProjectEditorComponent,
        TopicEditorComponent,
        ProfileEditorComponent
    ],
    imports: [
        CommonModule,
        EditorRoutingModule, 
        MaterialModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class EditorModule { }
