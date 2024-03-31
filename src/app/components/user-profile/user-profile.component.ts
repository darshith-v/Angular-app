import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
  
export class UserProfileComponent {
  name = "darshith"
  status = "single"
  salary = 40000
  isBtnDisabled = false

  inputVal = ''
  
  onChange(e:Event) {
    const value = (e.target as HTMLInputElement).value
    this.inputVal = value
  }
}
