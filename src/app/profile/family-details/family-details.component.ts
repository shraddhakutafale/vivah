import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.scss']
})
export class FamilyDetailsComponent {
  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();   
  familyIncome: any = '';
  familyValue: string = '';
  familyType: string = '';
  familyStatus: string = '';
  fatherOccupation: string = '';
  motherOccupation: string = '';
  noOfBrothers: string = '';
  noOfSisters: string = '';
  sistersMarried: string = '';

  familyValueOptions: string[] = ['Orthodox', 'Traditional', 'Moderate', 'Liberal'];
  familyTypeOptions: string[] = ['Joint', 'Nuclear Family', 'Other'];
  familyStatusOptions: string[] = ['Middle Class', 'Upper-Middle Class', 'High Class', 'Rich'];
  fatherOccupationOptions: string[] = ['Employed', 'Businessman', 'Professional', 'Retired', 'Not Employed', 'Passed Away'];
  motherOccupationOptions: string[] = ['Homemaker', 'Employed', 'Business Woman', 'Professional', 'Retired', 'Not Employed'];
  numberOptions: string[] = ['None', '1', '2', '3', '4', '5', '5+'];
  sistersMarriedOptions: string[] = ['None', '1', '2', '3', '4'];

familyIncomeOptions = [
  "Below 1 Lakh",
  "1 - 2 Lakh",
  "2 - 3 Lakh",
  "3 - 5 Lakh",
  "5 - 7 Lakh",
  "7 - 10 Lakh",
  "10 - 15 Lakh",
  "15 - 20 Lakh",
  "Above 20 Lakh"
];


   goPrevious() {
    this.previousStep.emit();   
  }
  goNext() {
    console.log({
      familyValue: this.familyValue,
      familyType: this.familyType,
      familyStatus: this.familyStatus,
      fatherOccupation: this.fatherOccupation,
      motherOccupation: this.motherOccupation,
      noOfBrothers: this.noOfBrothers,
      noOfSisters: this.noOfSisters,
      sistersMarried: this.sistersMarried
    });

    this.nextStep.emit(); 
  }
}
