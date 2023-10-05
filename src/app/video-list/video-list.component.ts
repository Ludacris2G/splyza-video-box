import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.sass'],
})
export class VideoListComponent {
  videos: any[] = [
    { title: 'Video 1', description: 'Description 1' },
    { title: 'Video 2', description: 'Description 2' },
    { title: 'Video 3', description: 'Description 3' },
  ];

  gridView: boolean = true;

  toggleView() {
    this.gridView = !this.gridView;
    console.log(this.gridView);
  }
}
