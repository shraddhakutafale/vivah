import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-professional-information',
  templateUrl: './professional-information.component.html',
  styleUrls: ['./professional-information.component.scss']
})
export class ProfessionalInformationComponent {
  @Output() nextStep = new EventEmitter<void>(); // Emit to parent
  @Output() previousStep = new EventEmitter<void>();  

  highestEducation: string = '';
  collegeName: string = '';
  employedIn: string = '';
  occupation: string = '';
  organizationName: string = '';
  currencyType: string = '';
  annualIncome: string = '';

  educationOptions: string[] = ['10th', '12th', 'BE', 'BSc', 'MSc', 'MBA'];
  employedInOptions: string[] = ['Gov/PSU', 'Defence', 'Private', 'Business', 'Self-Employed', 'Not Working'];
  currencyOptions: string[] = ['Rs', 'Dollar'];
  annualIncomeOptions: string[] = ['0-1 Lakh', '1-5 Lakh', '5 Lakh-10 Lakh', '10 Lakh-1 Crore', '1 Crore & above'];

   goPrevious() {
    this.previousStep.emit();   // 🔥 Parent step = step - 1
  }
  goNext() {
    console.log({
      highestEducation: this.highestEducation,
      collegeName: this.collegeName,
      employedIn: this.employedIn,
      occupation: this.occupation,
      organizationName: this.organizationName,
      currencyType: this.currencyType,
      annualIncome: this.annualIncome
    });

    this.nextStep.emit(); // tell parent to go to next step
  }
}
