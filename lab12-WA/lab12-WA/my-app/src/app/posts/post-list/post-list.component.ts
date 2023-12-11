import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1,
      title: 'Cómo mejorar tus habilidades de programación',
      content: 'El cliente es muy importante, el cliente será seguido por el cliente. ...' },
    { id: 2,
      title: 'Viaje a través de Asia: Experiencias y Aventuras',
      content: 'Los hijos viven en la enfermedad de la vejez y los nietos y...'},
    // Más publicaciones...
  ];
  selectedPost: any;

  constructor(private router: Router) {}

  onPostSelected(post: any) {
    this.selectedPost = post;
  }  
}