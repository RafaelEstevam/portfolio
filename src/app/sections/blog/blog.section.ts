import { Component, OnInit, signal } from '@angular/core';

import { Apollo } from "apollo-angular";
import { GET_posts } from '../../queries/blog.query';
import BlogProvider from '../../providers/blog.provider';
import { Post } from '../../interfaces/blog.interface';
import { LinkComponent } from '../../components/link/link.component';

@Component({
  selector: 'blog-section',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './blog.section.html',
  styleUrl: './blog.section.css',
  providers: BlogProvider
})
export class BlogSection implements OnInit {

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
