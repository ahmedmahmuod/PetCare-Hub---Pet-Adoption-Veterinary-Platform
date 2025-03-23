import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title/pageTitle.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [PageTitleComponent, AllBlogsComponent, TranslateModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {}
