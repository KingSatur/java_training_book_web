import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { BookRoutingModule } from './book-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BookListComponent, CreateBookComponent],
  imports: [
    BookRoutingModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    SharedModule,
  ],
})
export class BookModule {}
