import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VideoDetailsService {
  constructor( private http: HttpClient) {}

  getVideoDetails(videoId: string) {
    return this.http.get(`${environment.backend}/api/videos/${videoId}`);
  }
}
