import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  getVideos() {
    const apiUrl = `${environment.backend}/api/videos`;

    return this.http.get(apiUrl);
  }
}
