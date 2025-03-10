import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesService } from '../../../core/services/services/services.service';
import { egyptGovernoratesArrayen } from '../../../core/data/eg-governorates.model';
import { egyptGovernoratesArrayAr } from '../../../core/data/eg-governorates.model';

import { LanguageService } from '../../../core/services/language/language.service';
import { Router } from '@angular/router';
import { ServiceModel } from '../../../core/models/service/service.model';
import { SkeletonServiceComponent } from "../../../shared/components/skeletons/service-page/skeleton-service-page.component";

interface FAQItem {
  question: string;
  answer: string;
}

interface Review {
  id: number;
  name: string;
  image: string;
  date: string;
  rating: number;
  text: string;
}

@Component({
  selector: 'app-single-service',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, TranslateModule, SkeletonServiceComponent],
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.css',
})
export class SingleServiceComponent implements OnInit {
  // Privets
  private serviceServices = inject(ServicesService);
  private langServices = inject(LanguageService);
  private router = inject(Router);

  // another variables
  serviceId!: string;
  serviceData!: ServiceModel;
  faqsArray: { question: string; answer: string }[] = [];
  isLogged = true;
  activeTab = 'description';
  egyptGovernoratesArray = egyptGovernoratesArrayen;
  activeIndex: number = -1;
  selectedImage!: any;
  bookingForm: FormGroup;
  reviewForm: FormGroup;
  hoverRating = 0;
  loading = signal<boolean>(false);

  // ngOninit
  ngOnInit(): void {
    // get current lang to change the governates to translate
    this.langServices.currentLanguage$.subscribe((lang) => {
      this.egyptGovernoratesArray =
        lang === 'en' ? egyptGovernoratesArrayen : egyptGovernoratesArrayAr;
    });

    // get service id from state of router
    this.serviceId = history.state.serviceId;

    this.loading.set(true)
    // call services service to get service data
    this.serviceServices.getSingleService(this.serviceId).subscribe((data) => {
      this.serviceData = data;
      this.selectedImage = this.serviceData.imagesProfile[0];
      
      this.faqsArray = Object.entries(this.serviceData)
      .filter(([key]) => key.startsWith('question'))
      .map(([key, value]) => ({
        question: value[0],
        answer: value[1]
      }));
      this.loading.set(false)
    });

  }


  constructor(private fb: FormBuilder) {
    // Initialize Booking Form with validation
    this.bookingForm = this.fb.group({
      city: ['', Validators.required],
      duration: ['', Validators.required],
      date: ['', Validators.required],
    });

    // Initialize Review Form with validation
    this.reviewForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(6)]],
      rating: [0, [Validators.required, Validators.min(1)]],
    });
  }

  // Handle image selection
  selectImage(image: string) {
    this.selectedImage = image;
  }

  // Toggle FAQ answers
  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  // Handle booking form submission
  submitBooking(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched(); // Mark fields as touched to show errors
      alert('Please fill all required fields correctly.');
      return;
    }
    console.log('Booking Submitted:', this.bookingForm.value);

    // Reset form while keeping the default values
    this.bookingForm.reset({
      city: '',
      duration: '',
      date: '',
    });
  }

  // Reviews List
  reviews: Review[] = [
    {
      id: 1,
      name: 'Nada',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97',
      date: 'July 4',
      rating: 5,
      text: 'Everyone is very flexible and helpful. They really love animals and you can feel confident that your pet will be in safe hands.',
    },
    {
      id: 2,
      name: 'Ahmed',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97',
      date: 'June 20',
      rating: 4,
      text: 'Great service! My pet was well taken care of. Highly recommend.',
    },
    {
      id: 3,
      name: 'Sarah',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97',
      date: 'May 15',
      rating: 4.5,
      text: 'The team was amazing and professional. Will definitely use this service again!',
    },
  ];

  // Handle review form submission
  submitReview(): void {
    if (this.reviewForm.invalid) {
      alert('Please fill in all fields and select a rating.');
      return;
    }

    const newReview: Review = {
      id: this.reviews.length + 1,
      name: 'Anonymous',
      image: 'assets/default-user.jpg',
      date: new Date().toLocaleDateString(),
      rating: this.reviewForm.value.rating,
      text: this.reviewForm.value.text,
    };

    this.reviews.unshift(newReview);
    this.reviewForm.reset();
    this.hoverRating = 0; // Reset star rating
  }

  // Star Rating Helpers
  getStars(rating: number): string[] {
    return Array(Math.round(rating)).fill('⭐');
  }

  setRating(star: number): void {
    this.reviewForm.patchValue({ rating: star });
  }

  onHover(star: number): void {
    this.hoverRating = star;
  }

  onLeave(): void {
    this.hoverRating = 0;
  }
}