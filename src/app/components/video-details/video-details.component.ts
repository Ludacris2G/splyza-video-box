import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoDetailsService } from 'src/app/services/video-details.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.sass'],
})
export class VideoDetailsComponent implements OnInit {
  videoData: any = {};
  loading: boolean = true;
  titleChanged: boolean = false;
  userIsAuthor: boolean = false;
  userData: any;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoDetailsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const videoId = params.get('videoId');
      if (videoId) {
        this.videoService.getVideoDetails(videoId).subscribe(
          (data: Object) => {
            this.videoData = data;
            this.loading = false;

            this.userIsAuthor = this.isUserAuthor(this.videoData.author.id);
          },
          (error) => {
            console.error(error);
            this.loading = false;
          }
        );
      }
    });

    this.userService.getUser().subscribe((data: Object) => {
      this.userData = data;
    });
  }

  isUserAuthor(authorId: string): boolean {
    return this.userData && authorId === this.userData.id;
  }

  onTitleChange() {
    this.titleChanged = true;
  }
}
