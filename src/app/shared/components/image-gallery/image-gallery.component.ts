import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { GalleryImage } from '../../core/constants/media';
import { ImageLightboxComponent } from './image-lightbox/image-lightbox.component';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, ImageLightboxComponent],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent implements AfterViewInit {
  @Input() images: GalleryImage[] = [];
  @ViewChild(ImageLightboxComponent) lightbox!: ImageLightboxComponent;

  selectedCategory: 'all' | 'sports' | 'corporate-events' | 'garba' | 'employee-engagement' | 'production' = 'all';
  categories = [
    { id: 'all', label: 'All' },
    { id: 'sports', label: 'Sports' },
    { id: 'corporate-events', label: 'Corporate Events' },
    { id: 'garba', label: 'Garba' },
    { id: 'employee-engagement', label: 'Employee Engagement' },
    { id: 'production', label: 'Production' }
  ];

  filteredImages: GalleryImage[] = [];

  ngAfterViewInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    if (this.selectedCategory === 'all') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(img => img.category === this.selectedCategory);
    }
  }

  selectCategory(category: any): void {
    this.selectedCategory = category.id;
    this.applyFilter();
  }

  openLightbox(index: number): void {
    const imageIndex = this.images.indexOf(this.filteredImages[index]);
    this.lightbox.open(imageIndex);
  }
}
