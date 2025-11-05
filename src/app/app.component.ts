import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsService } from './posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoAPI';
  posts: any;

  constructor(private service:PostsService) {}

  ngOnInit() {
    this.posts = this.service.posts;

  }
}
