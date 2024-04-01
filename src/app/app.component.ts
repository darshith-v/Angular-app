import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = [
    { name: "Darshith", isSingle: true, salary: 400000 },
    { name: "Ravikiran", issingle: false, salary: 600000 },
    {name:"Gurukiran", isSingle: true, salary: 700000},
  ]
}
