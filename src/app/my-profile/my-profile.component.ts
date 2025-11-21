import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  
currentStep = 1;

constructor(private router: Router, private route: ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const step = params.get('step');
    if (step) {
      this.currentStep = Number(step);
    }
  });
}

  profile = {
    photoUrl: '',
    name: 'Shraddha',
    aboutMe: 'I am a simple and caring person...',
    age: 25,
    height: 165,
    weight: 55,
    maritalStatus: 'Unmarried',

    motherTongue: 'Gujarati',
    physicalStatus: 'Normal',
    bodyType: 'Slim',
    createdBy: 'Self',
    eatingHabits: 'Vegetarian',
    drinkingHabits: 'No',
    smokingHabits: 'No',

    religion: 'Hindu',
    caste: 'Patel',
    otherCommunity: false,
    star: 'Ashwini',
    rashi: 'Mesh',
    zodiac: 'Aries',
    dosh: 'No',

    education: 'B.E.',
    college: 'XYZ Engineering College',
    employedIn: 'Private',
    occupation: 'Software Developer',
    organization: 'ABC Technologies',
    currency: '₹',
    annualIncome: '6 Lakh',

    country: 'India',
    state: 'Gujarat',
    city: 'Ahmedabad',
    citizenship: 'Indian',
    currentCity: 'Ahmedabad',

    familyValue: 'Traditional',
    familyType: 'Nuclear',
    familyStatus: 'Middle Class',
    fatherOccupation: 'Businessman',
    motherOccupation: 'Homemaker',
    brothers: 1,
    sisters: 1,
    sistersMarried: 1,

    aboutFamily: 'We are a simple and traditional family...',

    hobbies: 'Music, Reading',
    music: 'Classical',
    books: 'Biographies',
    movies: 'Drama, Action',
    sports: 'Badminton',
    cuisine: 'Gujarati, Chinese',
    languages: 'Gujarati, Hindi, English'
  };
editSection(section: string) {
  const stepMap: any = {
    'personal-info': 1,
    'religion-info': 2,
    'professional-info': 3,
    'location': 4,
    'family-details': 5,
    'about-family': 6,
    'partners-preference': 7,
    'hobbies-interests': 8,
  };

  const step = stepMap[section];
  this.router.navigate(['/profile'], { queryParams: { step } });
}


}
