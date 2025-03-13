import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title/pageTitle.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [PageTitleComponent, AllBlogsComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {}
