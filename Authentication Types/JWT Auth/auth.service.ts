import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://your-api-url/auth'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Implement methods to save and retrieve JWT from local storage.
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  // Implement a method to check if the user is authenticated.
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Return true if a token exists, indicating authentication.
  }
}


// ==========
// providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: JwtInterceptor,
//       multi: true,
//     },