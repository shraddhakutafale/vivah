import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { CandidateComponent } from './candidate/candidate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CandidateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,   // <-- ADD THIS
    ReactiveFormsModule ,  // ✔ ADD THIS

    LayoutModule,
    BrowserAnimationsModule,
ToastrModule.forRoot({
  positionClass: 'toast-top-right',
  closeButton: true,
  progressBar: true,
  timeOut: 3000
}),

    
    RouterModule.forRoot([], {
      scrollPositionRestoration: 'top'
    }),

    
  ],
providers: [
  provideHttpClient(withInterceptors([authInterceptor]))
],
  bootstrap: [AppComponent]
})
export class AppModule { }
