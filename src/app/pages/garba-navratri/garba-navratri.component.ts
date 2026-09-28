import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-garba-navratri',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  templateUrl: './garba-navratri.component.html',
  styleUrl: './garba-navratri.component.scss'
})
export class GarbaNavratriComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Corporate Garba Event Management | Sportocraft',
      description: 'Create a memorable Navratri experience for your employees with complete décor, entertainment, production and event management.',
      keywords: 'Corporate Garba Events, Corporate Navratri Events, Garba Event Management, Corporate Celebration'
    });
  }
}
