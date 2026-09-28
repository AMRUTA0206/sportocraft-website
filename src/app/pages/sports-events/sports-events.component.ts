import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-sports-events',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  templateUrl: './sports-events.component.html',
  styleUrl: './sports-events.component.scss'
})
export class SportsEventsComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Corporate Sports Event Management | Sportocraft',
      description: 'From venue and registrations to fixtures, referees, branding, production and awards — one team manages your complete corporate tournament.',
      keywords: 'Corporate Sports Event Management, Corporate Tournament Management, Corporate Sports Events, Cricket, Badminton, Football'
    });
  }
}
