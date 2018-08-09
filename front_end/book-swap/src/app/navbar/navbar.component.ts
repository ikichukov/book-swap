import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() authenticatedUser: User;

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
