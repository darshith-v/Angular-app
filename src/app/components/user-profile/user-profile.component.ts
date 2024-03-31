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
  // name = "darshith"
  // status = "single"
  // salary = 40000
  // isBtnDisabled = false

  // inputVal = ''
  
  // onChange(e:Event) {
  //   const value = (e.target as HTMLInputElement).value
  //   this.inputVal = value
  // }

  users = [
    { name: "Darshith", isSingle: true, salary: 100000 },
    { name: "Ravikiran", isSingle: false, salary: 600000 },
    {name: "Sharath", isSingle: true, salary:800000}
  ]
}
