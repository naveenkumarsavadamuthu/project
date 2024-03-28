import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  submitted: boolean = false;
  passwordFieldType: string = 'password';
  eyeIconClass: string = 'fa-regular fa-eye-slash'; // Initial icon class

  onSubmit() {
    this.submitted = !this.submitted;
    // Toggle password visibility and icon
    this.passwordFieldType = this.submitted ? 'text' : 'password';
    this.eyeIconClass = this.submitted ? ' fa-solid fa-eye' : 'fa-regular fa-eye-slash';
  }
}
