import { Injectable, inject, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private tokenKey = 'token';
  private userKey = 'user';   // 👈 ADD THIS
  protected readonly restService = inject(RestService);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  /** --------------------- TOKEN METHODS --------------------- */

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  saveToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  /** --------------------- USER DATA METHODS --------------------- */

  /** Save complete user data returned during login */
  saveUser(user: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  /** Get stored user data */
  getUser() {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem(this.userKey);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  /** Remove user on logout */
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.userKey);
    }
  }

  /** --------------------- AUTH APIS --------------------- */

  /** REGISTER USER */
  register(data: any): Observable<any> {
    return this.restService.post('communitee/registercommunitee', data);
  }

  /** LOGIN USER */
  login(data: any) {
    return this.restService.post('communitee/communiteelogin', data);
  }
}
