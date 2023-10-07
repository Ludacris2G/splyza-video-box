import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VideoReactionsService {
  constructor(private http: HttpClient) {}

  // GET video reactions
  getVideoReactions(videoId: string) {
    return this.http.get(
      `${environment.backend}/api/videos/${videoId}/reactions`
    );
  }

  // POST video reaction
  addReaction(reaction: any) {
    return this.http.post(`${environment.backend}/api/videos/${reaction.videoId}/reactions`,reaction)
  }
}
