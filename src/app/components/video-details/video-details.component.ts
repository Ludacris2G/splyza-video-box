import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoDetailsService } from 'src/app/services/video-details.service';
import { UserService } from 'src/app/services/user.service';
import { VideoReactionsService } from 'src/app/services/video-reactions.service';

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
  videoId: any;
  videoReactions: any;
  originalTitle: any;
  currentTimestamp: any;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoDetailsService,
    private userService: UserService,
    private reactionsService: VideoReactionsService
  ) {}

  ngOnInit() {
    // fetch video details
    this.route.paramMap.subscribe((params) => {
      const videoId = params.get('videoId');
      this.videoId = videoId;
      if (videoId) {
        this.videoService.getVideoDetails(videoId).subscribe(
          (data: Object) => {
            this.videoData = data;
            this.loading = false;
            this.originalTitle = this.videoData.title;

            this.userIsAuthor = this.isUserAuthor(this.videoData.author.id);
          },
          (error) => {
            console.error(error);
            this.loading = false;
          }
        );
      }
    });

    // GET reactions
    this.reactionsService.getVideoReactions(this.videoId).subscribe(
      (reactions: any) => {
        console.log(reactions);
        this.videoReactions = reactions;
      },
      (error) => {
        console.error(error);
      }
    );

    // check logged user
    this.userService.getUser().subscribe((data: Object) => {
      this.userData = data;
    });
  }

  // check if user is the author
  isUserAuthor(authorId: string): boolean {
    return this.userData && authorId === this.userData.id;
  }

  // monitor when title changes from original
  onTitleChange() {
    this.titleChanged = this.originalTitle !== this.videoData.title;
  }

  // time formatter for timestamps
  formatTimeframe(timeframe: number): string {
    const hours = Math.floor(timeframe / 3600);
    const minutes = Math.floor((timeframe % 3600) / 60);
    const seconds = Math.floor(timeframe % 60);

    const formattedTimeframe = `${this.padZero(hours)}:${this.padZero(
      minutes
    )}:${this.padZero(seconds)}`;
    return formattedTimeframe;
  }

  // helper function
  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  // update title when it differs from original title
  updateVideoProperties() {
    if (this.videoData.id) {
      this.videoService
        .updateVideoTitle(this.videoData.id, this.videoData.title)
        .subscribe(
          (data: any) => {
            this.videoData = data;
            this.titleChanged = false;
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  // updates the video timestamp as it plays
  onVideoTimeUpdate(event: any) {
    const currentTime = event.target.currentTime;
    this.currentTimestamp = currentTime;
  }

  // POST star
  addStarReaction() {
    const starReaction = {
      videoId: this.videoData.id,
      type: 'star',
      timeframe: this.currentTimestamp,
    };

    this.reactionsService.addReaction(starReaction).subscribe(
      (data: Object) => {
        this.videoReactions = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
