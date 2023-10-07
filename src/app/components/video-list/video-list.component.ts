import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.sass'],
})
export class VideoListComponent implements OnInit {
  videos: any[] = [];

  showGrid: boolean = true;
  loading: boolean = true;

  constructor(private videoService: VideoService, private datePipe: DatePipe) {}

  // fetch videos
  ngOnInit() {
    this.videoService.getVideos().subscribe(
      (data: any) => {
        this.videos = data.map((video: any) => ({
          ...video,
          createdDate: this.datePipe.transform(video.createdDate, 'MM/dd/yyy'),
        }));
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }

  // toggle view
  showGridView() {
    this.showGrid = true;
  }

  showListView() {
    this.showGrid = false;
  }
}
