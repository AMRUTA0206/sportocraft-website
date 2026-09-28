import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GalleryImage } from '../../core/constants/media';

@Component({
  selector: 'app-image-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-lightbox.component.html',
  styleUrl: './image-lightbox.component.scss'
})
export class ImageLightboxComponent implements OnInit {
  @Input() images: GalleryImage[] = [];
  @Input() initialIndex: number = 0;

  isOpen = false;
  currentIndex = 0;
  currentImage: GalleryImage | null = null;

  ngOnInit(): void {
    this.currentIndex = this.initialIndex;
    if (this.images.length > 0) {
      this.currentImage = this.images[this.currentIndex];
    }
  }

  open(index: number): void {
    this.currentIndex = index;
    this.currentImage = this.images[this.currentIndex];
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen = false;
    document.body.style.overflow = '';
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }

  onKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) return;
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.previous();
    if (event.key === 'Escape') this.close();
  }
}
