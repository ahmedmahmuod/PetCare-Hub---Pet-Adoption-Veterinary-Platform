import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesService } from '../../../core/services/services/services.service';
import { egyptGovernoratesArrayen } from '../../../core/data/eg-governorates.model';
import { egyptGovernoratesArrayAr } from '../../../core/data/eg-governorates.model';
import { LanguageService } from '../../../core/services/language/language.service';
import { ServiceModel } from '../../../core/models/service/service.model';
import { SkeletonServiceComponent } from "../../../shared/components/skeletons/service-page/skeleton-service-page.component";
import { ReviewsComponent } from "../../../shared/components/reviews/reviews.component";

@Component({
  selector: 'app-single-service',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, TranslateModule, SkeletonServiceComponent, ReviewsComponent],
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.css',
})
export class SingleServiceComponent implements OnInit {
  // Privets
  private serviceServices = inject(ServicesService);
  private langServices = inject(LanguageService);

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


}