import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from 'src/app/services/books.service';
import { CreateBookComponent } from 'src/app/shared/components/create-book/create-book.component';
import { CreateRatingComponent } from 'src/app/shared/components/create-rating/create-rating.component';

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
  public dataSource = new MatTableDataSource<BookListViewDto>([]);
  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;

  public modalByAction: Record<string, any> = {
    rate: CreateRatingComponent,
    create_book: CreateBookComponent,
  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private readonly bookService: BooksService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks(1, 10).subscribe((resp) => {
      this.dataSource.data = resp?.map((dto) => ({
        authorName: dto?.authorDto?.name!,
        id: dto?.id,
        name: dto?.name,
      }));
    });
  }

  openDialog(operation: string, row?: BookListViewDto): void {
    this.dialog.open(
      this.modalByAction[operation],
      row
        ? {
            data: { id: row?.id },
          }
        : {}
    );
  }
}
