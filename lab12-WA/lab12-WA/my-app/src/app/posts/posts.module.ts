import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostDataComponent } from './post-data/post-data.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    PostDataComponent
  ],
  exports: [
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }

