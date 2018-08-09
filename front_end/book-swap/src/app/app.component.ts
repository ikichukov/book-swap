import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  authenticatedUser : User;

  constructor(private userService : UserService){
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => this.authenticatedUser = user);
  }



}
