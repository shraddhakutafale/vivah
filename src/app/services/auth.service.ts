import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

//     constructor(@Inject(PLATFORM_ID) private platformId: object) {}
//   getToken(): string | null {
//     if (isPlatformBrowser(this.platformId)) {
//       return localStorage.getItem('authToken'); // ✅ Only in browser
//     }
//     return null; // SSR fallback
//   }

//   getTenant(): string {
//     if (isPlatformBrowser(this.platformId)) {
//       return localStorage.getItem('tenant') || 'default-tenant';
//     }
//     return 'default-tenant';
//   }
constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null; // SSR case → avoid crash
  }
}
