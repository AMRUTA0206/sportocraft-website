import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryService } from '../../core/services/enquiry.service';
import { SeoService } from '../../core/services/seo.service';
import { siteConfig } from '../../core/constants/site-config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  phone = siteConfig.phone;
  workingHours = siteConfig.workingHours;
  email = siteConfig.email;
  address = siteConfig.officeAddress;
  whatsappNumber = siteConfig.whatsappNumber;
  whatsappMessage = siteConfig.whatsappMessage;

  constructor(
    private fb: FormBuilder,
    private enquiryService: EnquiryService,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      companyName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{7,20}$/)]],
      city: [''],
      eventType: ['', [Validators.required]],
      participants: [''],
      eventDate: [''],
      budget: [''],
      message: ['', [Validators.required]]
    });

    this.seo.setMeta({
      title: 'Get an Event Proposal | Sportocraft',
      description: 'Tell us what you are planning. Our corporate events team will help you structure the event, execution and budget.',
      keywords: 'Corporate Event Management Pune, Corporate Event Management Mumbai, Event Production, Corporate Sports Events'
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.enquiryService.submitEnquiry(this.form.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigateByUrl('/thank-you');
      },
      error: () => {
        this.isSubmitting = false;
        this.errorMessage = 'Something went wrong. Please try again.';
      }
    });
  }
}
