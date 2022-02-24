import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
// import { Post2Component } from './post2/post2.component';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive'

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    // Post2Component,
    PostFormComponent,
    StyleDirective,
    IfnotDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
