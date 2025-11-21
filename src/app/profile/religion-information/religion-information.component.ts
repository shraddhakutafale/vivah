import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-religion-information',
  templateUrl: './religion-information.component.html',
  styleUrls: ['./religion-information.component.scss']
})
export class ReligionInformationComponent {

  @Output() nextStep = new EventEmitter<void>(); 
  @Output() previousStep = new EventEmitter<void>();   


  religion: string = '';
  caste: string = '';
  willingOtherCommunity: boolean = false;
  stars: string = '';
  rashi: string = '';
  zodiac: string = '';
  havingDosh: string = '';
  community: any = "";
  casteOptions: string[] = [];
  starOptions: string[] = ['Ashwini','Bharani','Krittika','Rohini','Mrigashirsha','Ardra'];
  rashiOptions: string[] = ['Mesh','Vrishabh','Mithun','Kark','Singh','Kanya','Tula','Vrishchik','Dhanu','Makar','Kumbh','Meen'];
  zodiacOptions: string[] = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

  onReligionChange() {
    if (this.religion === 'hindu') this.casteOptions = ['Brahmin','Kshatriya','Vaishya','Shudra'];
    else if (this.religion === 'muslim') this.casteOptions = ['Sunni','Shia','Ahmadi','Other'];
    else this.casteOptions = [];

    this.caste = '';
  }

   goPrevious() {
    this.previousStep.emit();   // 🔥 Parent step = step - 1
  }
  goNext() {
    console.log({
      religion: this.religion,
      caste: this.caste,
      willingOtherCommunity: this.willingOtherCommunity,
      stars: this.stars,
      rashi: this.rashi,
      zodiac: this.zodiac,
      havingDosh: this.havingDosh
    });

    this.nextStep.emit(); // 🔹 Tell parent to go next
  }

  communityOptions = [
  "Maratha",
  "Brahmin",
  "Kshatriya",
  "Rajput",
  "Baniya",
  "Sunni",
  "Shia",
  "Christian-Catholic",
  "Christian-Protestant"
];

}
