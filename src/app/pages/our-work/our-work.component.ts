import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  templateUrl: './our-work.component.html',
  styleUrl: './our-work.component.scss'
})
export class OurWorkComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Our Work | Sportocraft',
      description: 'Corporate sports events, Garba celebrations, employee engagement and production — from events we planned and executed.',
      keywords: 'Corporate Events, Sports Event Management, Garba Event, Event Production'
    });
  }
}
