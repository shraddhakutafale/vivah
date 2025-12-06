import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';   // ✅ FIXED IMPORT

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signupForm!: FormGroup;

  private readonly authService = inject(AuthService);
  private readonly toast = inject(ToastrService);
  private readonly router = inject(Router);

  constructor(private fb: FormBuilder) {

    this.signupForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator   // ✅ password match added
    });
  }

  // 🔐 Custom Validator: Password & Confirm Password Match
  passwordMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  submit() {
    if (this.signupForm.invalid) {
      this.toast.error('Fill all fields correctly');
      return;
    }

    this.authService.register(this.signupForm.value).subscribe({
      next: (res: any) => {
        console.log("Success:", res);
        this.toast.success('Registration Successful');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error("Error:", err);
        this.toast.error('Registration Failed');
      }
    });
  }
}
