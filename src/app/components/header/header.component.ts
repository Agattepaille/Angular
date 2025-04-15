import {Component, inject, Signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = "Bienvenue sur le Wild Blog d'Amélie !";
  subtitle: string = 'Confectionné en Angular';
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean {
    return (this.authService.isLoggedIn() && (this.authService
      .getUserRoles()
      ?.some((role: any) => role.authority === 'ROLE_ADMIN') ?? false));

  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
