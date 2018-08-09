export class Book{

  id: string;
  title: string;
  authors: string;
  publisher: string;
  publishedDate: string;
  description: string;
  image: string;

  constructor(id: string, title: string, authors: string ,publisher: string, publishedDate: string, description: string, image: string){
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
    this.description = description;
    this.image = image;
  }
}
