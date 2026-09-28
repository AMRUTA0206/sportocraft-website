import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { siteConfig } from '../../core/constants/site-config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Sports Events', path: '/sports-events' },
    { label: 'Corporate Events', path: '/corporate-events' },
    { label: 'Garba / Navratri', path: '/garba-navratri' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/contact' }
  ];

  isMobileMenuOpen = false;
  isScrolled = false;
  companyName = siteConfig.companyName;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 30;
  }

  toggleMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}
