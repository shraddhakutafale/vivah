import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected readonly http = inject(HttpClient);
  apiUrl = environment.apiUrl;

  post(url: string, data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + url, data);
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + url);
  }
}
