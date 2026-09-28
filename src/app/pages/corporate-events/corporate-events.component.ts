import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-corporate-events',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  templateUrl: './corporate-events.component.html',
  styleUrl: './corporate-events.component.scss'
})
export class CorporateEventsComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Employee Events & Corporate Celebrations | Sportocraft',
      description: 'Employee engagement, corporate celebrations and event production managed by one accountable team.',
      keywords: 'Employee Engagement Events, Corporate Celebrations, Event Production, Corporate Garba Events'
    });
  }
}
