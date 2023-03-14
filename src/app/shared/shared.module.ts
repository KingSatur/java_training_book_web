import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateAuthorComponent } from './components/create-author/create-author.component';
import { CreateRatingComponent } from './components/create-rating/create-rating.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CreateAuthorComponent,
    CreateRatingComponent,
    CreateBookComponent,
  ],
  exports: [CreateAuthorComponent, CreateRatingComponent, CreateBookComponent],
  imports: [MatInputModule, MatButtonModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
