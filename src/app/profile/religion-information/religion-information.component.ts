import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-religion-information',
  templateUrl: './religion-information.component.html',
  styleUrls: ['./religion-information.component.scss']
})
export class ReligionInformationComponent {

  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  private readonly userService = inject(UserService);

  candidateId: any = null;

  religion: string = '';
  caste: string = '';
  community: any = "";
  willingOtherCommunity: boolean = false;
  stars: string = '';
  rashi: string = '';
  zodiac: string = '';
  havingDosh: string = '';

  casteOptions: string[] = [];
  starOptions: string[] = ['Ashwini','Bharani','Krittika','Rohini','Mrigashirsha','Ardra'];
  rashiOptions: string[] = ['Mesh','Vrishabh','Mithun','Kark','Singh','Kanya','Tula','Vrishchik','Dhanu','Makar','Kumbh','Meen'];
  zodiacOptions: string[] = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

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

  ngOnInit() {
    // Read candidateId created in Step-1
    this.candidateId = localStorage.getItem('candidateId');

    if (!this.candidateId) {
      console.error("candidateId missing — Step-1 not saved properly!");
    }
  }

  onReligionChange() {
    if (this.religion === 'hindu') 
      this.casteOptions = ['Brahmin','Kshatriya','Vaishya','Shudra'];
    else if (this.religion === 'muslim') 
      this.casteOptions = ['Sunni','Shia','Ahmadi','Other'];
    else 
      this.casteOptions = [];

    this.caste = '';
  }

  goPrevious() {
    this.previousStep.emit();
  }

  goNext() {
    if (!this.candidateId) {
      console.error("candidateId is missing! Cannot save religion info.");
      return;
    }

    const payload = {
      candidateId: this.candidateId,
      religion: this.religion,
      caste: this.caste,
      community: this.community,
      stars: this.stars,
      rashi: this.rashi,
      zodiac: this.zodiac,
      dosh: this.havingDosh,
      otherCommunities: this.willingOtherCommunity ? 1 : 0
    };

    // ⛔ Wrong earlier: this.userService.createCandidate(...)
    // ✅ Correct API call for religion info
    this.userService.createCandidate(payload).subscribe({
      next: (res) => {
        console.log("Religion info saved", res);
        this.nextStep.emit();
      },
      error: (err) => console.error("Religion API Error", err)
    });
  }
}
