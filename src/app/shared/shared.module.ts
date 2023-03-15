import { NgModule } from '@angular/core';
import { CreateAuthorComponent } from './components/create-author/create-author.component';
import { CreateRatingComponent } from './components/create-rating/create-rating.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CreateAuthorComponent,
    CreateRatingComponent,
    CreateBookComponent,
  ],
  exports: [CreateAuthorComponent, CreateRatingComponent, CreateBookComponent],
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
