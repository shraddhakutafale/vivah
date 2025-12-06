import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavMenuOpen = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastrService
  ) {}

  toggleNavMenu(): void {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

  closeNavMenu(): void {
    this.isNavMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    if (sidebar && toggleButton && !sidebar.contains(event.target as Node) && !toggleButton.contains(event.target as Node)) {
      this.closeNavMenu();
    }
  }

  onSidebarClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  goToHome(): void {
    this.closeNavMenu();
    this.router.navigate(['/']);
  }

  goToProfile(): void {
    this.closeNavMenu();
    this.router.navigate(['/my-profile']);
  }

  goToLogin(): void {
    this.closeNavMenu();
    this.router.navigate(['/login']);
  }

  goToCandidate() {
    this.closeNavMenu();
    this.router.navigate(['/candidate']);
  }

  // 🔥 Login Check
  isLoggedIn() {
    return !!this.auth.getToken();
  }

  // 🔥 Logout Function
  logout() {
    this.auth.logout();
    this.toast.success('Logged out successfully');
    this.router.navigate(['/login']);
    this.closeNavMenu();
  }
}
