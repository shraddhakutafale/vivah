import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

// Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 

// Sub-components
import { LocationComponent } from './location/location.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { AboutMyFamilyComponent } from './about-my-family/about-my-family.component';
import { HobbiesInterestComponent } from './hobbies-interest/hobbies-interest.component';
import { ReligionInformationComponent } from './religion-information/religion-information.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { PartnersPreferenceComponent } from './partners-preference/partners-preference.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ReligionInformationComponent,
    ProfessionalInformationComponent,
    LocationComponent,
    FamilyDetailsComponent,
    AboutMyFamilyComponent,
    HobbiesInterestComponent,
    PartnersPreferenceComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule 
  ]
})
export class ProfileModule { }
