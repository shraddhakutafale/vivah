import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  @Output() nextStep = new EventEmitter<void>();
    @Output() previousStep = new EventEmitter<void>();   


  country: string = '';
  residingState: string = '';
  residingCity: string = '';
  citizenship: string = '';
  currentCity: string = '';

  countryOptions: string[] = ['India', 'USA', 'Canada', 'UK', 'Australia', 'Nepal', 'UAE'];
  citizenshipOptions: string[] = ['Indian', 'American', 'Canadian', 'British', 'Australian', 'Other'];

   goPrevious() {
    this.previousStep.emit();   // 🔥 Parent step = step - 1
  }
  goNext() {
    console.log({
      country: this.country,
      residingState: this.residingState,
      residingCity: this.residingCity,
      citizenship: this.citizenship,
      currentCity: this.currentCity
    });

    this.nextStep.emit(); // tell parent to go to family details
  }
}
