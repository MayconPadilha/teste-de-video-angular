import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss']
})
export class CardVideoComponent {

  @Input() title: string = '';
  @Input() url: string = '';
  @Input() imagem: string = '';
  isModalOpen: boolean = false;

  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  constructor() { }

  openModal(event: Event): void {
    event.preventDefault();
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
  }


}
