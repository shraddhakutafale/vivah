import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hobbies-interest',
  templateUrl: './hobbies-interest.component.html',
  styleUrls: ['./hobbies-interest.component.scss']
})
export class HobbiesInterestComponent {
  constructor(private router: Router) {}


  @Output() previousStep = new EventEmitter<void>(); 
  @Output() nextStep = new EventEmitter<void>();     

  // Popup visibility
  showSavedPopup = false;

  // Form fields
  hobbies = '';
  musicGenre = '';
  bookType = '';
  movieType = '';
  sportsActivity = '';
  cuisine = '';
  languagesKnown = '';

  // Options
  hobbiesOptions = ['Acting', 'Baking', 'Dancing', 'Photography', 'Traveling', 'Painting'];
  musicGenres = ['Classical', 'Blues', 'Rock', 'Jazz', 'Pop', 'Folk'];
  bookTypes = ['Biographies', 'Comics', 'Fiction', 'Non-fiction', 'Self-help', 'Poetry'];
  movieTypes = ['Action', 'Comedy', 'Drama', 'Thriller', 'Romance', 'Sci-Fi'];
  sportsActivities = ['Badminton', 'Archery', 'Cricket', 'Football', 'Yoga', 'Running'];
  cuisines = ['Chinese', 'Bengali', 'Indian', 'Italian', 'Mexican', 'Thai'];
  languages = ['Arabic', 'English', 'Hindi', 'French', 'Spanish', 'German'];

  goPrevious() {
    this.previousStep.emit();
  }
goNext() {
  console.log("Saved!", {
    hobbies: this.hobbies,
    musicGenre: this.musicGenre,
    bookType: this.bookType,
    movieType: this.movieType,
    sportsActivity: this.sportsActivity,
    cuisine: this.cuisine,
    languagesKnown: this.languagesKnown
  });

  // Show popup
  this.showSavedPopup = true;

  setTimeout(() => {
    this.showSavedPopup = false;
    this.router.navigate(['/my-profile']);  
  }, 1500);
}


  closePopup() {
    this.showSavedPopup = false;
    this.nextStep.emit();
  }
}
