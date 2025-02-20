import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-page-category',
  templateUrl: './select-page-category.component.html',
  styleUrls: ['./select-page-category.component.scss']
})
export class SelectPageCategoryComponent implements OnInit {

  isGenderChipsVisible: boolean = false;
  isFormVisible: boolean = false;
  isContinueButtonVisible: boolean = false; // Controls the visibility of the Continue button
  genderHeading: string = '';
  formHeading: string = ''; // Heading in the form
  selectedGender: string = '';
  selectedProfileType: string = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  closeModal() {
    this.modalService.dismissAll();
  }

  // Show gender chips or continue button based on profile type selection
  showGenderChips(profileType: string): void {
    this.selectedProfileType = profileType;
    this.isContinueButtonVisible = false; // Hide continue button initially

    // Show gender chips for Myself, My Friend, and My Relative
    if (profileType === 'Myself' || profileType === 'My Friend' || profileType === 'My Relative') {
      this.isGenderChipsVisible = true;
      this.genderHeading = `Select Gender `;
      this.isFormVisible = false; // Ensure form is hidden when selecting profile type
    } else if (profileType === 'My Son' || profileType === 'My Brother' || profileType === 'My Daughter' || profileType === 'My Sister') {
      // For these, show the Continue button
      this.isGenderChipsVisible = false;
      this.isContinueButtonVisible = true;
      this.genderHeading = `Select Gender `;
    } else {
      this.isGenderChipsVisible = false;
      this.isFormVisible = false;
      this.selectedGender = '';
    }
  }

  selectGender(gender: string): void {
    this.selectedGender = gender;
    this.isGenderChipsVisible = false;
    this.isFormVisible = true; // Show the form after gender selection

    // Set form heading based on profile type and gender
    if (this.selectedProfileType === 'Myself') {
      this.formHeading = 'Your Name';
    } else if (this.selectedProfileType === 'My Friend' || this.selectedProfileType === 'My Relative') {
      this.formHeading = gender === 'Male' ? 'His Name' : 'Her Name';
    }
  }

  continueToForm(): void {
    // Based on profile type, determine the gender and form heading
    this.isGenderChipsVisible = false; // Hide gender chips immediately when continuing

    if (this.selectedProfileType === 'My Son' || this.selectedProfileType === 'My Brother') {
      this.formHeading = 'His Name'; // Set the form heading to "His Name"
    } else if (this.selectedProfileType === 'My Sister' || this.selectedProfileType === 'My Daughter') {
      this.formHeading = 'Her Name'; // Set the form heading to "Her Name"
    }

    this.isFormVisible = true; // Show the form
    this.isContinueButtonVisible = false; // Hide continue button after clicking
  }

  goBack(): void {
    this.isFormVisible = false;
    this.isGenderChipsVisible = false;
    this.isContinueButtonVisible = false; // Hide continue button when going back
    this.selectedProfileType = '';
    this.selectedGender = '';
  }
}
