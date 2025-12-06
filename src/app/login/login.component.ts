import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  private readonly authService = inject(AuthService);
  private readonly toast = inject(ToastrService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      this.toast.error('Enter valid details');
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {

        if (res.status) {
          // Save token
          localStorage.setItem("token", res.access_token);

          // Save user details (VERY IMPORTANT)
          localStorage.setItem("user", JSON.stringify(res.user));

          this.toast.success('Login Successful');

          // Redirect
          this.router.navigate(['/candidate']);
        }
      },
      error: err => {
        this.toast.error(err.error?.message || "Login failed");
      }
    });
  }

  goToSignup() {
    this.router.navigate(['/register']);
  }
}
