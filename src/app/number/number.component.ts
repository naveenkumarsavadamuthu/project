import { Component } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
  submitted: boolean = false;

 

  onSubmit() {
    this.submitted = true;
  }
}  
