import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from 'src/app/services/books.service';
import { CreateAuthorComponent } from 'src/app/shared/components/create-author/create-author.component';
import { CreateRatingComponent } from 'src/app/shared/components/create-rating/create-rating.component';
import { CreateBookComponent } from '../create-book/create-book.component';

interface BookListViewDto {
  id: number;
  name: string;
  authorName: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'authorName', 'actions'];
  public books: BookListViewDto[] = [];
  public modalByAction: Record<string, any> = {
    rate: CreateRatingComponent,
    create_book: CreateBookComponent,
  };

  constructor(
    private readonly bookService: BooksService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((resp) => {
      this.books = resp?.map((dto) => ({
        authorName: dto?.authorDto?.name,
        id: dto?.id,
        name: dto?.name,
      }));
    });
  }

  openDialog(operation: string): void {
    console.log('eher');

    this.dialog.open(this.modalByAction[operation]);
  }
}
