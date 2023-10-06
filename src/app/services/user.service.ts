import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.backend}/api/users/self`;

  constructor(private http: HttpClient) {}

  getUser(): Observable<Object> {
    return this.http.get(this.apiUrl);
  }
}
