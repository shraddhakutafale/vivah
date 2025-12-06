import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  // --- UI flags ---
  isGenderChipsVisible = false;
  isFormVisible = false;
  isContinueButtonVisible = false;

  genderHeading = '';
  formHeading = '';
  selectedGender = '';
  selectedUserType = '';  

  userForm!: FormGroup;

  selectedImage: string = 'assets/img/av1.jpg';
  selectedFile: File | null = null;
    private readonly toast = inject(ToastrService);
  

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

 ngOnInit(): void {
  if (!this.authService.getToken()) {
    this.toast.error('Please login first!', 'Authentication Required');
    this.router.navigate(['/login']);
    return;
  }

  this.initForm();
}

  initForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dob: [''],
      email: ['', Validators.email],
      password: ['']  // optional
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  // --- UI Logic ---
  showGenderChips(userType: string): void {
    this.selectedUserType = userType;
    this.isContinueButtonVisible = false;

    if (['Myself', 'My Friend', 'My Relative'].includes(userType)) {
      this.isGenderChipsVisible = true;
      this.genderHeading = 'Select Gender';
      this.isFormVisible = false;
    } else {
      this.isGenderChipsVisible = false;
      this.isContinueButtonVisible = true;
    }
  }

  selectGender(gender: string): void {
    this.selectedGender = gender;
    this.isGenderChipsVisible = false;
    this.isFormVisible = true;

    if (this.selectedUserType === 'Myself') this.formHeading = 'Your Name';
    else if (['My Friend', 'My Relative'].includes(this.selectedUserType))
      this.formHeading = gender === 'Male' ? 'His Name' : 'Her Name';
  }

  continueToForm(): void {
    if (['My Son', 'My Brother'].includes(this.selectedUserType)) this.formHeading = 'His Name';
    else this.formHeading = 'Her Name';

    this.isFormVisible = true;
    this.isContinueButtonVisible = false;
  }

  goBack(): void {
    this.isFormVisible = false;
    this.isGenderChipsVisible = false;
    this.isContinueButtonVisible = false;
    this.selectedUserType = ''; 
    this.selectedGender = '';
  }

  onEditImageClick(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

 onImageSelected(event: any): void {
  if (event.target.files && event.target.files[0]) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
    };

    // Only call readAsDataURL if selectedFile is not null
    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    }
  }
}

 // --- Save Candidate ---
saveUser() {

  // --- Login check ---
  if (!this.authService.getToken()) {
    this.toast.error('Please login first!', 'Authentication Required');
    this.router.navigate(['/login']);
    return;
  }

  // --- Form Invalid ---
  if (this.userForm.invalid) {
    this.userForm.markAllAsTouched();
    this.toast.error('Please fill all required fields', 'Validation Error');
    return;
  }
const user = JSON.parse(localStorage.getItem("user") || '{}');

const payload = {
  userId: user.userId,   // 👈 IMPORTANT
  name: this.userForm.value.firstName + ' ' + this.userForm.value.lastName,
  mobileNo: this.userForm.value.mobileNo,
  dob: this.userForm.value.dob,
  email: this.userForm.value.email,
  age: '',
  religion: '',
  location: '',
  profileImage: this.selectedImage,
  userType: this.selectedUserType,
  gender: this.selectedGender
};

  this.userService.addCandidate(payload).subscribe({
    next: () => {
      this.toast.success('Candidate Added Successfully!', 'Success');
      this.closeModal();
    },
    error: () => {
      this.toast.error('Failed to add candidate!', 'Error');
    }
  });
}

}
