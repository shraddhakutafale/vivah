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



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        NgbModule ,// Import NgBootstrap module here

    LayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], {
      scrollPositionRestoration: 'top' // Add this line
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
