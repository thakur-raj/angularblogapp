import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//router module used for setting up the application level routing
import { RouterModule, Routes } from '@angular/router';

//for forms
import { FormsModule } from '@angular/forms';

// For toastr
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'blog/:blogId', component: BlogViewComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: '**', component: NotFoundComponent }
    ],
    ),
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()

  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
