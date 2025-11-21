// import { HttpInterceptorFn } from '@angular/common/http';
// import { AuthService } from '../services/auth.service';
// import { inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {


//   const authService = inject(AuthService);
//   const token = authService.getToken();

//   // Clone request to add headers
//   let authReq = req.clone({
//     setHeaders: {
//       Tenant: 'exCommunitee',
//     },
//   });

//   // Add Authorization header if token exists
//   if (token) {
//     authReq = authReq.clone({
//       setHeaders: {
//         // 'Authorization': Bearer ${token},
//         Tenant: 'exCommunitee',
//       },
//     });
//   }

//   return next(authReq);
// };

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const tenant = localStorage.getItem('tenant') || 'exCommunitee';

  const modifiedReq = req.clone({
    setHeaders: {
      Tenant:'exCommunitee'
    }
  });

  return next(modifiedReq);
};
