import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-page-category',
  templateUrl: './select-page-category.component.html',
  styleUrls: ['./select-page-category.component.scss']
})
export class SelectPageCategoryComponent implements OnInit {

  // --- UI flags ---
  isGenderChipsVisible = false;
  isFormVisible = false;
  isContinueButtonVisible = false;

  genderHeading = '';
  formHeading = '';
  selectedGender = '';
  selectedUserType = '';  

  userForm!: FormGroup;
  private readonly toast = inject(ToastrService);
  
  

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dob: [''],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

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

    if (this.selectedUserType === 'Myself') {
      this.formHeading = 'Your Name';
    } else if (['My Friend', 'My Relative'].includes(this.selectedUserType)) {
      this.formHeading = gender === 'Male' ? 'His Name' : 'Her Name';
    }
  }

 
  continueToForm(): void {
    if (['My Son', 'My Brother'].includes(this.selectedUserType)) {
      this.formHeading = 'His Name';
    } else {
      this.formHeading = 'Her Name';
    }

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

 
  selectedImage: string = 'assets/img/av1.jpg';
  selectedFile: File | null = null;

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
    }
  }

 
 saveUser() {
  if (this.userForm.invalid) {
    this.userForm.markAllAsTouched();
    this.toast.error('Please fill all required fields', 'Validation Error');
    return;
  }

  const payload = {
    userName: this.userForm.value.firstName,
    lastName: this.userForm.value.lastName,
    dob: this.userForm.value.dob,
    mobNo: this.userForm.value.mobileNo,
    email: this.userForm.value.email,
    password: this.userForm.value.password,
    userType: this.selectedUserType,
    gender: this.selectedGender
  };

  this.userService.addUser(payload).subscribe({
    next: (res: any) => {
      this.toast.success('User Saved Successfully!', 'Success');
      this.closeModal();
    },
    error: (err) => {
      this.toast.error('Something went wrong', 'Error');
    }
  });
}

}
