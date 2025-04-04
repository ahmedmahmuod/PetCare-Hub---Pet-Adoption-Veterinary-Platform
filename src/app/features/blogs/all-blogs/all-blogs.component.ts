import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { selectBlogs, selectBlogsLoading } from '../../../stores/blogs-store/blogs.selector';
import * as BlogsActions from '../../../stores/blogs-store/blogs.actions';
import { SkeletonCardComponent } from "../../../shared/components/skeletons/card-services/skelton-services-card.component";

export interface CarouselItem {
  id: string | number;
  imageUrl: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-all-blogs',
  standalone: true,
  imports: [CommonModule, SkeletonCardComponent],
  templateUrl: './all-blogs.component.html',
  styleUrl: './all-blogs.component.css',
  providers: []
})
export class AllBlogsComponent{
  private store = inject(Store);
  blogs$ = this.store.select(selectBlogs);
  isLoading$ = this.store.select(selectBlogsLoading);

  constructor() {
    this.store.select(selectBlogs)
      .pipe(take(1))
      .subscribe(blogs => {
        if (!blogs || blogs.length === 0) {
          this.store.dispatch(BlogsActions.loadBlogs());
        }
      });
  }

  goToArticle(url: string): void {
    window.open(url, '_self');
  }
}
