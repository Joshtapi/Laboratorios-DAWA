import { Injectable, EventEmitter } from '@angular/core';
import { Post } from '././posts/posts-model';

@Injectable({
  providedIn: 'root'
})
export class SelectedPostService {
  posts = [
    { id: 1,
      title: 'Cómo mejorar tus habilidades de programación',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 2,
      title: 'Viaje a través de Asia: Experiencias y Aventuras',
      content: 'Pellentesque habitant morbi tristique senectus et netus et...'},
    // Otras publicaciones...
  ];

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }
}
