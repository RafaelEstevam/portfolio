import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';

import { Apollo } from "apollo-angular";
import { GET_posts } from '../../queries/blog.query';
import BlogProvider from '../../providers/blog.provider';
import { Post } from '../../interfaces/blog.interface';
import { LinkComponent } from '../../components/link/link.component';
import { AnimationsService } from '../../services/animation.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'blog-section',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './blog.section.html',
  styleUrl: './blog.section.css',
  providers: [BlogProvider, AnimationsService]
})
export class BlogSection implements OnInit {

  constructor(private apollo : Apollo, private animationsService: AnimationsService, @Inject(PLATFORM_ID) private platformId: Object){};

  public posts = signal<Post[]>([]); 

  loadPosts(){
    this.apollo.watchQuery({
      query: GET_posts
    }).valueChanges.subscribe(({data, error} : any) => {
      this.posts.set(data.posts);
      this.animationsService.handleGetElements();
    })
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadPosts();
    }
  }
}
