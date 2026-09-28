import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoItem } from '../../core/constants/media';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.scss'
})
export class VideoModalComponent implements OnInit {
  @Input() video: VideoItem | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  isFullscreen = false;

  ngOnInit(): void {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  closeModal(): void {
    this.pauseVideo();
    this.close.emit();
  }

  pauseVideo(): void {
    if (this.videoElement?.nativeElement) {
      this.videoElement.nativeElement.pause();
    }
  }

  toggleFullscreen(): void {
    if (!this.videoElement) return;
    const video = this.videoElement.nativeElement;

    if (!this.isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
        this.isFullscreen = true;
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        this.isFullscreen = false;
      }
    }
  }

  handleKeydown(event: KeyboardEvent): void {
    if (!this.isOpen) return;
    if (event.key === 'Escape') this.closeModal();
  }
}
