import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = `${environment.backend}/api/videos`;

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Object> {
    return this.http.get(this.apiUrl);
  }
}
