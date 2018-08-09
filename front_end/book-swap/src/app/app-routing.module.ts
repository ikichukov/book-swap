import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {BookshelfComponent} from "./bookshelf/bookshelf.component";
import {AddBookComponent} from "./add-book/add-book.component";

const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'book-shelf', component: BookshelfComponent },
  { path: 'books/new', component: AddBookComponent},
  { path: '**', redirectTo: '', pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
