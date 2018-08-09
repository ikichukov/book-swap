import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "./book";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  searchByQuery(query: string) : Observable<Book[]> {
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDdQSQx94ZtY6YUXLu21qVVa1OEw9M1iG4`)
      .pipe(
        map(obj => obj.items.map(
          book => new Book(book.id, book.volumeInfo.title, book.volumeInfo.authors.join(","), book.volumeInfo.publisher
          , book.volumeInfo.publishedDate, book.volumeInfo.descriprion, book.volumeInfo.imageLinks.thumbnail)
        ))
      );
  }

  addBook(book: Book) {
    console.log(book);
    this.http.post<Book>("/api/books", book, this.httpOptions)
      .subscribe(()=>{console.log("subscribe")});
  }
}
