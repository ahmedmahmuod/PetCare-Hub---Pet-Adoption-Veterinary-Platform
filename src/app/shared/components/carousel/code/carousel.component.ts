import { CarouselModule } from 'primeng/carousel';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AllBlogsComponent } from "../../../../features/blogs/all-blogs/all-blogs.component";

@Component({
  selector: 'carousel-circular-demo',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
  imports: [ AllBlogsComponent, CarouselModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class CarouselCircularDemo implements OnInit {
  responsiveOptions: any[] | undefined;
  
  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '467px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }


}
