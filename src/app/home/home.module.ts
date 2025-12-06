import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectPageCategoryComponent } from './select-page-category/select-page-category.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';


@NgModule({
  declarations: [
    HomeComponent,
    SelectPageCategoryComponent,
    AddCandidateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class HomeModule { }
