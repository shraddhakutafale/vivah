import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about-my-family',
  templateUrl: './about-my-family.component.html',
  styleUrls: ['./about-my-family.component.scss']
})
export class AboutMyFamilyComponent {
  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();   

  aboutMyFamily: string = '';
   goPrevious() {
    this.previousStep.emit();   
  }

  goNext() {
    console.log({
      aboutMyFamily: this.aboutMyFamily
    });

    this.nextStep.emit(); 
  }
  
}
