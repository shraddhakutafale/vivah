import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavMenuOpen = false; // Flag to toggle sidebar visibility

  constructor(private router: Router) {}

  // Function to toggle the sidebar visibility
  toggleNavMenu(): void {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

  // Function to close the sidebar when a menu item is clicked
  closeNavMenu(): void {
    this.isNavMenuOpen = false;
  }

  // Close sidebar when clicking outside of the sidebar
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    // Check if the click is outside the sidebar and the toggle button
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    if (sidebar && toggleButton && !sidebar.contains(event.target as Node) && !toggleButton.contains(event.target as Node)) {
      this.closeNavMenu();
    }
  }

  // Close the sidebar if clicked inside the sidebar
  onSidebarClick(event: MouseEvent): void {
    event.stopPropagation(); // Prevent click from closing the sidebar immediately
  }

  // Function to close the sidebar and navigate to the home page
  goToHome(): void {
    this.closeNavMenu(); // Close the sidebar
    this.router.navigate(['/']); // Navigate to the home page
  }

    goToProfile(): void {
    this.closeNavMenu(); // Close the sidebar
    this.router.navigate(['/my-profile']); // Navigate to the home page
  }
    goToLogin(): void {
    this.closeNavMenu(); // Close the sidebar
    this.router.navigate(['/login']); // Navigate to the home page
  }
}
