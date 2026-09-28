import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { ImageGalleryComponent } from '../../shared/components/image-gallery/image-gallery.component';
import { VideoGalleryComponent } from '../../shared/components/video-gallery/video-gallery.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { GALLERY_IMAGES, GALLERY_VIDEOS } from '../../core/constants/media';

interface SportItem {
  name: string;
  icon: string;
}

interface ExecutionStep {
  number: string;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-sports-events',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ImageGalleryComponent,
    VideoGalleryComponent,
    CtaBannerComponent
  ],
  templateUrl: './sports-events.component.html',
  styleUrl: './sports-events.component.scss'
})
export class SportsEventsComponent implements OnInit {
  sports: SportItem[] = [
    { name: 'Cricket', icon: '🏏' },
    { name: 'Badminton', icon: '🏸' },
    { name: 'Football', icon: '⚽' },
    { name: 'Pickleball', icon: '🎾' },
    { name: 'Table Tennis', icon: '🏓' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Carrom', icon: '🎯' },
    { name: 'Athletics', icon: '🏃' },
    { name: 'Multi-Sport Tournaments', icon: '🏆' }
  ];

  executionSteps: ExecutionStep[] = [
    {
      number: '01',
      title: 'Brief & Format',
      description: 'Understand your event objectives, participant count, sports selection, timeline and budget constraints in one initial call.'
    },
    {
      number: '02',
      title: 'Proposal & Budget',
      description: 'A transparent line-item proposal with clear scope, team structure, timeline and cost options aligned to your approvals.'
    },
    {
      number: '03',
      title: 'Venue & Registrations',
      description: 'Venue site visits, registrations portal, participant communication and logistics planning with contingency mapping.'
    },
    {
      number: '04',
      title: 'Fixtures & Production',
      description: 'Fixture generation, referee/umpire coordination, branding, jerseys, trophies, medals and all event collateral produced.'
    },
    {
      number: '05',
      title: 'Tournament Day(s)',
      description: 'On-ground team managing check-ins, timelines, play, safety, announcements, scoring and real-time issue resolution.'
    },
    {
      number: '06',
      title: 'Results & Media',
      description: 'Final results, winner announcements, trophy presentations, photography, highlight videos and closure report delivery.'
    }
  ];

  faqItems: FAQItem[] = [
    {
      question: 'How many sports can we run in a single event?',
      answer: 'We manage single-sport tournaments and multi-sport events. The number depends on your participant base, venue size, timeline and budget. Common multi-sport formats include 4-8 sports over 1-2 days. We\'ll structure the schedule to ensure quality execution.'
    },
    {
      question: 'Can you manage registrations and participant communication?',
      answer: 'Yes. We handle the full registration portal setup, participant onboarding, schedule sharing, deadline management and day-of communication. Your HR or admin team doesn\'t need to coordinate dozens of emails.'
    },
    {
      question: 'What if we don\'t have a venue?',
      answer: 'We can recommend and coordinate venue options. Our team conducts site visits, negotiates terms, handles logistics and ensures the space meets your event requirements.'
    },
    {
      question: 'Do you provide referees and umpires?',
      answer: 'Yes. We coordinate experienced referees, umpires and technical officials for all sports. They manage on-ground play, scoring and fair execution.'
    },
    {
      question: 'Can you manage multi-location tournaments?',
      answer: 'Yes. We coordinate corporate tournaments across multiple office locations with consistent branding, rules, scoring and a unified final event for winners.'
    },
    {
      question: 'What is included in the proposal?',
      answer: 'Detailed scope, team structure, timeline, safety protocols, contingency plans, itemised budget, venue details, sports logistics, production requirements and invoicing schedule.'
    }
  ];

  galleryImages = GALLERY_IMAGES.filter(img => img.category === 'sports' || img.category === 'production');
  galleryVideos = GALLERY_VIDEOS.filter(v => v.category === 'sports');

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Corporate Sports Event Management | Sportocraft',
      description: 'From venue and registrations to fixtures, referees, branding, production and awards — one team manages your complete corporate tournament.',
      keywords: 'Corporate Sports Event Management, Corporate Tournament Management, Corporate Sports Events, Cricket, Badminton, Football, Corporate Sports Days'
    });
  }

  toggleFAQ(item: FAQItem): void {
    item.expanded = !item.expanded;
  }
}
