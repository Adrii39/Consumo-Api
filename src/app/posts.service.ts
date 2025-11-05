import { HttpClient } from '@angular/common/http';
import { Injectable, signal, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseURL = 'https://jsonplaceholder.typicode.com/posts';
  
  posts = signal<Post[]>([]);

  constructor(private http: HttpClient) {
    effect(() => {
      this.http.get<Post[]>(this.baseURL).subscribe(data => {
        this.posts.set(data);
      });
    });
  }

  getPosts() {
    return this.http.get<Post[]>(this.baseURL);
  }
}

