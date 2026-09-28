import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { ImageGalleryComponent } from '../../shared/components/image-gallery/image-gallery.component';
import { VideoGalleryComponent } from '../../shared/components/video-gallery/video-gallery.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { GALLERY_IMAGES, GALLERY_VIDEOS } from '../../core/constants/media';

interface ServiceItem {
  title: string;
  icon: string;
}

interface HowItWorksStep {
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
  selector: 'app-garba-navratri',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ImageGalleryComponent,
    VideoGalleryComponent,
    CtaBannerComponent
  ],
  templateUrl: './garba-navratri.component.html',
  styleUrl: './garba-navratri.component.scss'
})
export class GarbaNavratriComponent implements OnInit {
  services: ServiceItem[] = [
    { title: 'Garba Décor', icon: '✨' },
    { title: 'DJ & Music', icon: '🎵' },
    { title: 'Professional Sound', icon: '🔊' },
    { title: 'Lighting', icon: '💡' },
    { title: 'Dhol Artists', icon: '🥁' },
    { title: 'Garba Performers', icon: '🎭' },
    { title: 'Stage Setup', icon: '🎪' },
    { title: 'Corporate Branding', icon: '🏢' },
    { title: 'Photography & Videography', icon: '📸' },
    { title: 'Food Coordination', icon: '🍽️' },
    { title: 'Guest Management', icon: '👥' },
    { title: 'Complete Event Operations', icon: '⚙️' }
  ];

  entertainmentItems = [
    { title: 'DJ & Music', description: 'Professional DJ with curated Garba and contemporary music selection.', icon: '🎵' },
    { title: 'Dhol Artists', description: 'Live dhol players creating authentic rhythm and celebration energy.', icon: '🥁' },
    { title: 'Garba Performers', description: 'Professional Garba dancers leading and energizing participants.', icon: '🎭' }
  ];

  howItWorksSteps: HowItWorksStep[] = [
    {
      number: '01',
      title: 'Share Your Brief',
      description: 'Tell us about your office, participant count, venue preference, budget and Garba vision. We capture all requirements in one call.'
    },
    {
      number: '02',
      title: 'Concept & Budget',
      description: 'A detailed Garba concept with décor direction, entertainment plan and transparent budget with options.'
    },
    {
      number: '03',
      title: 'Venue & Planning',
      description: 'Venue site visit, décor layout planning, sound/lighting plot, seating arrangement and logistics mapping.'
    },
    {
      number: '04',
      title: 'Production',
      description: 'Décor fabrication, stage setup, sound & lighting installation, branding display and all production elements delivered.'
    },
    {
      number: '05',
      title: 'Garba Night',
      description: 'Our team manages setup, registrations, entertainment coordination, food service and full event operations.'
    },
    {
      number: '06',
      title: 'Photos & Video',
      description: 'Professional photography coverage, highlight video creation and media delivery for your internal sharing.'
    }
  ];

  faqItems: FAQItem[] = [
    {
      question: 'Can we host Garba in our office campus?',
      answer: 'Yes, absolutely. We design Garba setups for office campuses, conference rooms, courtyards and open areas. We also recommend external venues if needed and help with logistics.'
    },
    {
      question: 'How much space do we need for Garba?',
      answer: 'A minimum of 1,500-2,000 sq ft is ideal for 200-300 participants. We can adapt to smaller or larger spaces based on your participant count and dance floor requirements.'
    },
    {
      question: 'Can we customize the décor and theme?',
      answer: 'Completely. We work with your brand guidelines, color preferences and cultural themes. Décor can be traditional, contemporary or a blend that suits your corporate identity.'
    },
    {
      question: 'Do you provide entertainment if we don\'t have professional performers?',
      answer: 'Yes. We coordinate professional Garba performers, dhol artists and DJs who can lead the event and energize participants throughout the night.'
    },
    {
      question: 'Can we include food and refreshments?',
      answer: 'Yes. We coordinate with catering partners for traditional Garba snacks, sweets, dinner and beverages. We manage food service, hygiene and guest flow.'
    },
    {
      question: 'How long does a typical Garba event last?',
      answer: 'Typically 3-4 hours. We can adjust based on your schedule. Usually includes setup, entertainment, dancing, food service and optional awards/recognition.'
    },
    {
      question: 'What if it\'s an outdoor Garba? Do you handle weather contingencies?',
      answer: 'Yes. For outdoor Garba, we include weather contingency planning, backup indoor options, tent rental if needed and weatherproof equipment.'
    },
    {
      question: 'Can we involve families in a corporate Garba?',
      answer: 'Yes. We design family Garba events with activities for all age groups. Setup, safety and entertainment are tailored for mixed family participation.'
    }
  ];

  galleryImages = GALLERY_IMAGES.filter(img => img.category === 'garba');
  galleryVideos = GALLERY_VIDEOS.filter(v => v.category === 'garba');

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Corporate Garba Event Management | Sportocraft',
      description: 'Create a memorable Navratri experience for your employees with complete décor, entertainment, production and event management.',
      keywords: 'Corporate Garba Events, Corporate Navratri Events, Garba Event Management, Corporate Celebration, Navratri Décor, Corporate Garba Night'
    });
  }

  toggleFAQ(item: FAQItem): void {
    item.expanded = !item.expanded;
  }
}
