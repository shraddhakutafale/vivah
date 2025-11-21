import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './my-profile.component';



@NgModule({
  declarations: [
  MyProfileComponent
],

  imports: [
    CommonModule,
    MyProfileRoutingModule,
    CommonModule,
    FormsModule,
    
    ReactiveFormsModule,
  ]
})
export class MyProfileModule { }
