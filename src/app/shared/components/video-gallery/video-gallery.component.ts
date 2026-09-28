import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VideoItem } from '../../core/constants/media';
import { VideoCardComponent } from '../video-card/video-card.component';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'app-video-gallery',
  standalone: true,
  imports: [CommonModule, VideoCardComponent, VideoModalComponent],
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.scss'
})
export class VideoGalleryComponent implements OnInit {
  @Input() videos: VideoItem[] = [];

  selectedCategory: 'sports' | 'corporate-events' | 'garba' | 'employee-engagement' | 'highlights' | 'all' = 'all';
  categories = [
    { id: 'all', label: 'All' },
    { id: 'sports', label: 'Sports' },
    { id: 'corporate-events', label: 'Corporate Events' },
    { id: 'garba', label: 'Garba' },
    { id: 'employee-engagement', label: 'Employee Engagement' },
    { id: 'highlights', label: 'Highlights' }
  ];

  filteredVideos: VideoItem[] = [];
  selectedVideo: VideoItem | null = null;
  isVideoModalOpen = false;

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    if (this.selectedCategory === 'all') {
      this.filteredVideos = this.videos;
    } else {
      this.filteredVideos = this.videos.filter(v => v.category === this.selectedCategory);
    }
  }

  selectCategory(category: any): void {
    this.selectedCategory = category.id;
    this.applyFilter();
  }

  playVideo(video: VideoItem): void {
    this.selectedVideo = video;
    this.isVideoModalOpen = true;
  }

  closeModal(): void {
    this.isVideoModalOpen = false;
    this.selectedVideo = null;
  }
}
