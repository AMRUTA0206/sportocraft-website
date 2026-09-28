import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface EnquiryFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  eventType: string;
  participants: string;
  eventDate: string;
  budget: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EnquiryService {
  submitEnquiry(data: EnquiryFormData): Observable<boolean> {
    console.info('Enquiry submitted (static placeholder):', data);
    return of(true).pipe(delay(600));
  }
}
