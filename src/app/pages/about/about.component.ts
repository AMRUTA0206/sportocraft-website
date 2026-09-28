import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'About Sportocraft | Corporate Event Management',
      description: 'Sportocraft Sports & Events is a corporate event management company serving organisations in Pune, Mumbai and across India.',
      keywords: 'Corporate Event Management Pune, Corporate Event Management Mumbai, Sports Event Management, Employee Engagement Events'
    });
  }
}
