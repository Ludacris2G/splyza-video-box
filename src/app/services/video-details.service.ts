import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VideoDetailsService {
  constructor(private http: HttpClient) {}

  // GET video details
  getVideoDetails(videoId: string) {
    return this.http.get(`${environment.backend}/api/videos/${videoId}`);
  }

  // PATCH video title
  updateVideoTitle(videoId: string, title: string) {
    const url = `${environment.backend}/api/videos/${videoId}`;
    const body = {
      title,
    };
    return this.http.patch(url, body);
  }


}
