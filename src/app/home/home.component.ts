import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  // Para que funcione el video de fondo
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    video.muted = true;
    video.play().catch((error) => {
      console.log('Autoplay bloqueado:', error);
    });
  }
}
