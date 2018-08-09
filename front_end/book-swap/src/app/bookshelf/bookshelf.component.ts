import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {BooksService} from "../books.service";
import {Book} from "../book";

@Component({
  selector: 'app-book-shelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {


  results : Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService
  }

}
