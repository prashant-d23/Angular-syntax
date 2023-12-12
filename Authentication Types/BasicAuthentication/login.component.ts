import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router:Router) {}

  login() {
    if (this.authService.authenticate(this.username, this.password)) {
      // Redirect or navigate to the authenticated part of your app.
      this.router.navigate(['/dashboard'])
    } else {
      // Display an error message to the user.
      alert('Login failed. Please check your credentials.');
      this.router.navigate(['/signup'])
    }
  }
}
