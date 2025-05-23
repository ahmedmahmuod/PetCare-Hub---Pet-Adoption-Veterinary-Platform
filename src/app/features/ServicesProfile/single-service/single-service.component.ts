import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ServicesService } from '../../../core/services/services/services.service';
import { egyptGovernoratesArrayen } from '../../../core/data/eg-governorates.model';
import { egyptGovernoratesArrayAr } from '../../../core/data/eg-governorates.model';
import { LanguageService } from '../../../core/services/language/language.service';
import { ServiceProfileModel } from '../../../core/models/service/service.model';
import { SkeletonServiceComponent } from "../../../shared/components/skeletons/service-page/skeleton-service-page.component";
import { ReviewsComponent } from "../../../shared/components/reviews/reviews.component";
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from '../../../core/services/reviews/reviews.service';
import { ToastService } from '../../../shared/services/toast-notification/tost-notification.service';
import { SectionSpinnerComponent } from "../../../shared/components/spinner/spinner-loading.component";
import { TokenService } from '../../../shared/services/token-managment/token-management.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-single-service',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, TranslateModule, SkeletonServiceComponent, ReviewsComponent, SectionSpinnerComponent],
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.css',
})
export class SingleServiceComponent implements OnInit {
  // Privets
  private serviceServices = inject(ServicesService);
  private langServices = inject(LanguageService);
  private route = inject (ActivatedRoute)
  private reviewsService = inject(ReviewsService);
  private toastService = inject(ToastService);
  private tokenService = inject(TokenService);
  private translate = inject(TranslateService);


  // another variables
  serviceId!: string;
  serviceData!: ServiceProfileModel;
  faqsArray: { question: string; answer: string }[] = [];
  activeTab = 'description';
  egyptGovernoratesArray = egyptGovernoratesArrayen;
  activeIndex: number = -1;
  selectedImage!: any;
  bookingForm!: FormGroup;
  hoverRating = 0;
  loading = signal<boolean>(false);
  isLoading: boolean = false;
  reviewsLoading: boolean = false;
  role = this.tokenService.role$;

  // ngOninit
  ngOnInit(): void {
    // get current lang to change the governates to translate
    this.langServices.currentLanguage$.subscribe((lang) => {
      this.egyptGovernoratesArray =
        lang === 'en' ? egyptGovernoratesArrayen : egyptGovernoratesArrayAr;
    });
    this.loading.set(true)
    
    // get service id from state of router
    this.serviceId = history.state.serviceId;    

    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('serviceId') || '';
    });

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

  paymentMethods = [
    {
      value: 'visa',
      label: 'Card',
      icon: 'assets/images/payment/visa.svg'
    },
    {
      value: 'cash',
      label: 'Cash',
      icon: 'assets/images/payment/cash.svg'
    }
  ];

  constructor(private fb: FormBuilder) {
    // Initialize Booking Form with validation
    this.bookingForm = this.fb.group({
      city: ['', Validators.required],
      duration: ['', Validators.required],
      date: ['', Validators.required],
      paymentMethod: ['', Validators.required]
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

  // Submet of form service request 
  submitBooking(): void {
    this.tokenService.isLoggedIn$.pipe(take(1)).subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        this.toastService.error('Login Required', 'Please log in first to continue.');
        return;
      }

      this.tokenService.role$.pipe(take(1)).subscribe((role) => {
        if (role === 'admin') {
          this.toastService.info(
            this.translate.instant('Pages.Services.Single_Service.Tabs.Toasts.Errors.Admin_Error.Title'),
            this.translate.instant('Pages.Services.Single_Service.Tabs.Toasts.Errors.Admin_Error.Message')
          );
          return;
        }

        const requestData = {
          ...this.bookingForm.value,
          serviceType: this.serviceData.name,
        };

        this.isLoading = true;
        this.serviceServices.addServiceRequest(requestData).subscribe({
          next: () => {
            this.toastService.success('Success!', 'Your request has been submitted successfully.');
            this.isLoading = false;
          },
          error: (err) => {
            this.toastService.error('Error!', err.error?.message || 'An unexpected error occurred. Please try again.');
            this.isLoading = false;
          }
        });

        // Reset form
        this.bookingForm.reset({
          city: '',
          duration: '',
          date: '',
          paymentMethod: '',
        });
      });
    });
  }

  // delete review function
  onDeletedReview(review: any) {    
    this.reviewsLoading = true;
    this.reviewsService.deleteReview(review).subscribe({
      next: (res) => {
        this.serviceServices.getSingleService(this.serviceId).subscribe({
          next: (data) => {
            this.serviceData = data;
            this.reviewsLoading = false;
          this.toastService.success(this.translate.instant('Pages.Services.Single_Service.Tabs.Reviews_Page.Dialogs.Confirm_Delete.Toasts.Success.Title'), this.translate.instant('Pages.Services.Single_Service.Tabs.Reviews_Page.Dialogs.Confirm_Delete.Toasts.Success.Message'));
          }
        })
      },

      error: (err) => {
        this.reviewsLoading = false;
          this.toastService.error(this.translate.instant('Pages.Services.Single_Service.Tabs.Reviews_Page.Dialogs.Confirm_Delete.Toasts.Errors.Title'), this.translate.instant('Pages.Services.Single_Service.Tabs.Reviews_Page.Dialogs.Confirm_Delete.Toasts.Errors.Message'));
      },
    })
  }

  // updating review function
  onUpdatingReview(review: any) {    
    this.reviewsLoading = true;
    
    this.reviewsService.updateReview(review).subscribe({
      next: (res) => {
        this.serviceServices.getSingleService(this.serviceId).subscribe({
          next: (data) => {
            this.serviceData = data;
            this.reviewsLoading = false;
          this.toastService.success(this.translate.instant('Pages.Services.Single_Service.Tabs.Reviews_Page.Dialogs.Update_Dialog.Toasts.Success.Title'), this.translate.instant('Pages.Services.Single_Service.Tabs.Reviews_Page.Dialogs.Update_Dialog.Toasts.Success.Message'));
          }
        })
      },

      error: (err) => {
        this.reviewsLoading = false;
          this.toastService.error(this.translate.instant('Pages.Services.Single_Service.Tabs.Reviews_Page.Dialogs.Update_Dialog.Toasts.Errors.Title'), this.translate.instant('Pages.Services.Single_Service.Tabs.Reviews_Page.Dialogs.Update_Dialog.Toasts.Errors.Message'));
      },
    })
  }

  // add review function
  addSubmetReview(review: any) {    
    this.reviewsLoading = true;
    this.reviewsService.addServiceReview(review.review, review.rating, this.serviceId).subscribe({
      next: (res) => {
        this.serviceServices.getSingleService(this.serviceId).subscribe({
          next: (data) => {
            this.serviceData = data;
            this.reviewsLoading = false;
          this.toastService.success(this.translate.instant('Pages.Services.Single_Service.Tabs.Toasts.Successful.Title'), this.translate.instant('Pages.Services.Single_Service.Tabs.Toasts.Successful.Message'));
          }
        })
      },
      error: (err) => {
        this.reviewsLoading = false;
        this.toastService.error(this.translate.instant('Pages.Services.Single_Service.Tabs.Toasts.Errors.User_Error.Title'), this.translate.instant('Pages.Services.Single_Service.Tabs.Toasts.Errors.User_Error.Message'))
      },
    });
  }

}