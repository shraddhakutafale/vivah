import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-partners-preference',
  templateUrl: './partners-preference.component.html',
  styleUrls: ['./partners-preference.component.scss']
})
export class PartnersPreferenceComponent {

  // Two-way binding fields
  city: string = '';
  workingStatus: string = '';
  education: string = '';
  salaryRange: string = '';
  heightRange: string = '';
  ageRange: string = '';
  maritalStatus: string = '';
  motherTongue: string = '';
  physicalStatus: string = '';
  bodyType: string = '';
  profileCreatedBy: string = '';
  eatingHabits: string = '';
  drinkingHabits: string = '';
  smokingHabits: string = '';

  // Options
  workingOptions = ['Working', 'Not Working'];
  educationOptions = ['High School', 'Graduate', 'Postgraduate', 'Doctorate', 'Other'];
  salaryOptions = ['< 2 LPA', '2-5 LPA', '5-10 LPA', '> 10 LPA'];
  heightOptions = ['4ft 5in - 5ft', '5ft - 5ft 5in', '5ft 5in - 6ft', '6ft+'];
  ageOptions = ['18-22', '23-27', '28-32', '33-40', '40+'];
  maritalStatusOptions = ['Unmarried', 'Divorced', 'Widowed'];
  motherTongueOptions = ['Hindi', 'English', 'Gujarati', 'Marathi', 'Tamil', 'Telugu'];
  physicalStatusOptions = ['Normal', 'Physically Challenged'];
  bodyTypeOptions = ['Slim', 'Athletic', 'Average', 'Heavy'];
  profileCreatedByOptions = ['Self', 'Parent', 'Sibling', 'Relative', 'Friend'];
  eatingHabitsOptions = ['Vegetarian', 'Non-Vegetarian', 'Eggetarian', 'Jain Food'];
  drinkingHabitsOptions = ['No', 'Yes', 'Occasionally'];
  smokingHabitsOptions = ['No', 'Yes', 'Occasionally'];

  @Output() previousStep = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<void>();

  goPrevious() {
    this.previousStep.emit();
  }

  goNext() {
    this.nextStep.emit();
  }
}
