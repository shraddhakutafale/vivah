import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  currentStep = 1;
  selectedImages: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // 🔥 Read ?step=2 from the URL
    this.route.queryParams.subscribe(params => {
      if (params['step']) {
        this.currentStep = +params['step']; // convert string → number
      }
    });
  }

  goNext() {
    this.currentStep++;
  }

  goBack() {
    this.currentStep--;
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onImagesSelected(event: any) {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file: any) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImages.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
  }
}
