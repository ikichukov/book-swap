import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BooksService} from "../books.service";
import {Book} from "../book";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  results : Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  search(query : string){
    this.booksService
      .searchByQuery(query)
      .subscribe(results => this.results = results);
  }

  addBook(book: Book) {
    this.booksService.addBook(book);
  }
}
