import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected readonly http = inject(HttpClient);
  apiUrl = environment.apiUrl;

  // ---------------------------
  // POST METHOD WITH TENANT
  // ---------------------------
  post(url: string, data: any): Observable<any> {

    const tenant = localStorage.getItem('tenant') || 'exiaa_ex0018'; // default tenant

    const headers = new HttpHeaders({
      'Tenant': tenant,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl + url, data, { headers });
  }

  // ---------------------------
  // GET METHOD WITH TENANT
  // ---------------------------
  get(url: string): Observable<any> {

    const tenant = localStorage.getItem('tenant') || 'exiaa_ex0018';

    const headers = new HttpHeaders({
      'Tenant': tenant
    });

    return this.http.get<any>(this.apiUrl + url, { headers });
  }
}
