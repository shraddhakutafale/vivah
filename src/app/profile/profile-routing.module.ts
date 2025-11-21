import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ReligionInformationComponent } from './religion-information/religion-information.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { LocationComponent } from './location/location.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { AboutMyFamilyComponent } from './about-my-family/about-my-family.component';
import { HobbiesInterestComponent } from './hobbies-interest/hobbies-interest.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
   
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
