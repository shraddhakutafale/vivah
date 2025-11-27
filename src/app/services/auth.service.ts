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
  private API_URL = 'http://localhost/exiaa-material-api/webapi/user';
  private tokenKey = 'token';
   protected readonly restService = inject(RestService);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  /** Get token from localStorage */
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  /** REGISTER USER */
  register(data:any): Observable<any> {
       return this.restService.post('communitee/registercommunitee', data);
  }

  /** LOGIN USER */
 login(data: any) {
       return this.restService.post('communitee/communiteelogin', data);
}

  /** SAVE TOKEN AFTER LOGIN */
  saveToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  /** LOGOUT */
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
  }
}
