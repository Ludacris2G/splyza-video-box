import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video/video.service';
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

  ngOnInit() {
    this.videoService.getVideos().subscribe((data: any) => {
      console.log(data);
      this.videos = data.map((video: any) => ({
        ...video,
        createdDate: this.datePipe.transform(video.createdDate, 'MM/dd/yyy'),
      }));
      this.loading = false;
    });
  }

  showGridView() {
    this.showGrid = true;
  }

  showListView() {
    this.showGrid = false;
  }
}
