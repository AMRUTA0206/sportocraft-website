import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Case Studies | Sportocraft',
      description: 'Event case studies and project snapshots for Sportocraft corporate events and sports programmes.',
      keywords: 'Case Studies, Corporate Events, Event Portfolio'
    });
  }
}
