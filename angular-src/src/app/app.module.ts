import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
  //{ path: 'blog/categories/:name', component: CategoryComponent },
  //{ path: 'blog/posts/:id', component: PostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    BlogComponent,
    PostComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
