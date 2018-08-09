import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../temporary-book";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
