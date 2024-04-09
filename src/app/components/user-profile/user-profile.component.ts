import { Component, Input, Output, booleanAttribute, numberAttribute, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { emit } from 'node:process';

function formateName(value: string) {
  return "Hi" + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
  
export class UserProfileComponent {

  @Input() message: string = "";
  @Input() phone: number = 0;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Hello world from child to parent");
  }

  // @Input({ alias: "userName", transform: formateName }) Name = "";
  // @Input({ transform: booleanAttribute }) isSting = "";


  // name = "darshith"
  // status = "single"
  // salary = 40000
  // isBtnDisabled = false

  // inputVal = ''
  
  // onChange(e:Event) {
  //   const value = (e.target as HTMLInputElement).value
  //   this.inputVal = value
  // }

  // users = [
  //   { name: "Darshith", isSingle: true, salary: 100000 },
  //   { name: "Ravikiran", isSingle: false, salary: 600000 },
  //   {name: "Sharath", isSingle: true, salary:800000}
  // ]
}
