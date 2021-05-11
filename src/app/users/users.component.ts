import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName = '';

  constructor() {

  }

  ngOnInit(): void {

  }
  // inputUserName(event: Event) {
  //   this.userName = (<HTMLInputElement>event.target).value;
  // }
  createUserName() {
    if (this.userName.length > 0) {
      return true
    }
    else
      return false;

  }
  display = ''
  onClickButton() {
    this.display = this.userName + " is created..";
    this.userName = '';

  }
  // displayUserName() {
  //   this.display = this.userName + " is created..";

  // }
}
