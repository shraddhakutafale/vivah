import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  currentStep = 1;
  selectedImages: string[] = [];
  selectedFiles: File[] = [];

  private fb = inject(FormBuilder);
  private readonly userService = inject(UserService);

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Read ?step=2 from URL
    this.route.queryParams.subscribe(params => {
      if (params['step']) {
        this.currentStep = +params['step'];
      }
    });
  }

profileForm: FormGroup = this.fb.group({
  name: [''],
  email: [''],
  mobileNo: [''],
  about: [''],
  age: [''],
  height: [''],
  weight: [''],
  maritalStatus: [''],
  motherTongue: [''],
  physicalStatus: [''],
  bodyType: [''],
  profileCreatedBy: [''],
  eatingHabits: [''],
  drinkingHabits: [''],
  smokingHabits: [''],
});


saveStep1() {
  if (this.profileForm.invalid) return;

  const payload = this.profileForm.value;

  this.userService.createCandidate(payload).subscribe({
    next: (res) => {
      console.log('Candidate saved', res);

      if (res?.data) {
        localStorage.setItem("candidateId", res.data); 
      }

      this.currentStep++;
    },
    error: (err) => console.error(err)
  });
}


  goBack() {
    this.currentStep--;
  }

  goNext() {
    this.currentStep++;
  }

  goHome() {
    this.router.navigate(['/']);
  }

onImagesSelected(event: any) {
  const files = event.target.files;
  if (files) {
    // Cast files to File[]
    const fileArray = Array.from(files) as File[];

    fileArray.forEach((file: File) => {
      this.selectedFiles.push(file); // for backend upload
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImages.push(e.target.result); // for preview
      };
      reader.readAsDataURL(file);
    });
  }
}


  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
    this.selectedFiles.splice(index, 1);
  }
}
