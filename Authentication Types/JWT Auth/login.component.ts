import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        const token = response.token; // Replace 'token' with the actual property in your server's response
        if (token) {
          this.authService.saveToken(token);
          // Redirect or navigate to the authenticated part of your app.
        } else {
          // Display an error message to the user.
          alert('Login failed. Please check your credentials.');
        }
      },
      (error) => {
        console.error('Login error:', error);
        // Handle login errors here.
      }
    );
  }
}
