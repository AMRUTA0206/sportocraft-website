import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VideoItem } from '../../core/constants/media';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() video!: VideoItem;
  @Input() onPlay: (() => void) | null = null;

  handlePlay(): void {
    if (this.onPlay) {
      this.onPlay();
    }
  }
}
