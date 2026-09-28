import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Sportocraft Sports & Events | Corporate Event Management Pune, Mumbai',
      description: 'Corporate Event Management Pune • Mumbai • Pan India. Sportocraft manages sports tournaments, employee engagement, corporate celebrations and event production.',
      keywords: 'Corporate Event Management Pune, Corporate Event Management Mumbai, Corporate Sports Events, Corporate Sports Event Management, Employee Engagement Events, Corporate Garba Events, Corporate Navratri Events, Event Production'
    });
  }
}
