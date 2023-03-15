import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from 'src/app/services/books.service';
import { AuthorDto } from 'src/shared/dto/author-dto';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  public createBookForm!: FormGroup;
  public errorMessages: Record<string, any> = {
    name: {
      required: 'You must add a score',
      maxlength: 'The name must not exceed 150 characters',
    },
    editorial: {
      required: 'You must add a description',
      maxlength: 'The editorial must not exceed 150 characters',
    },
    author: {
      required: 'You must select an author',
    },
  };
  public authors: AuthorDto[] = [
    {
      name: 'Shyann Sipes',
      id: 1,
    },
    {
      name: 'Carol Morar',
      id: 2,
    },
    {
      name: 'Pat Quigley',
      id: 3,
    },
  ];

  constructor(
    public readonly dialogRef: MatDialogRef<CreateBookComponent>,
    private readonly bookService: BooksService,
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private readonly _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createBookForm = this.formBuilder.nonNullable.group({
      name: this.formBuilder.nonNullable.control<string>('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
      editorial: this.formBuilder.nonNullable.control<string>('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      author: this.formBuilder.nonNullable.control<number>(NaN, [
        Validators.required,
      ]),
    });
  }

  public getErrorMessage(controlName: string) {
    const [errorName] = Object.keys(
      this.createBookForm.controls[controlName]?.errors || {}
    );
    return this.errorMessages?.[controlName]?.[errorName];
  }

  public createBook() {
    this.bookService
      .createBook({
        authorId: this.createBookForm.controls['author']?.value,
        editorial: this.createBookForm.controls['editorial']?.value,
        name: this.createBookForm.controls['name']?.value,
      })
      .subscribe({
        next: (resp) => {
          console.log(resp);

          this._snackBar.open('Book was created successfully');
          this.dialogRef.close();
        },
        error: (err) => {},
      });
  }
}
