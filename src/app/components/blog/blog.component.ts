import { Component, OnInit, signal } from '@angular/core';

import { Apollo } from "apollo-angular";
import { GET_posts } from '../../queries/blog.query';
import BlogProvider from '../../providers/blog.provider';
import { Post } from '../../interfaces/blog.interface';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'blog-component',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  providers: BlogProvider
})
export class BlogComponent implements OnInit {

  constructor(private apollo : Apollo){};

  public posts = signal<Post[]>([]); 

  loadPosts(){
    this.apollo.watchQuery({
      query: GET_posts
    }).valueChanges.subscribe(({data, error} : any) => {
      this.posts.set(data.posts);
    })
  }

  ngOnInit(): void {
    this.loadPosts();
  }

}
