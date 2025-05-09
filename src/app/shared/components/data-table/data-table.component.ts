import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Column } from '../../../features/auth/dashboard/content-area/admin/blogs/admin-blogs.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() data: any[] | null = []
  @Input() columns!: Column[];
  @Input() hasImage: boolean = false;
  @Input() hasActions: boolean = false;

  first = 0;
  rows = 5;

  next() {
    this.first += this.rows;
  }

  prev() {
    this.first -= this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.data ? this.first >= this.data.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }
}
