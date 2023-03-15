import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-create-rating',
  templateUrl: './create-rating.component.html',
  styleUrls: ['./create-rating.component.scss'],
})
export class CreateRatingComponent implements OnInit {
  public createRatingForm!: FormGroup;
  public errorMessages: Record<string, any> = {
    score: {
      required: 'You must add a score',
      max: 'The score must be between 1 and 1000',
    },
    description: {
      required: 'You must add a description',
    },
  };

  constructor(
    public readonly dialogRef: MatDialogRef<CreateRatingComponent>,
    private readonly ratinService: RatingService,
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private readonly _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createRatingForm = this.formBuilder.nonNullable.group({
      score: this.formBuilder.nonNullable.control('', [
        Validators.required,
        Validators.max(1000),
      ]),
      description: this.formBuilder.nonNullable.control('', [
        Validators.required,
      ]),
    });
  }

  public getErrorMessage(controlName: string) {
    const [errorName] = Object.keys(
      this.createRatingForm.controls[controlName]?.errors || {}
    );
    return this.errorMessages?.[controlName]?.[errorName];
  }

  public createRating() {
    this.ratinService
      .createRatingForBook({
        bookId: this.data?.id,
        description: this.createRatingForm.controls['description']?.value,
        score: this.createRatingForm.controls['score']?.value,
      })
      .subscribe((resp) => {
        this._snackBar.open('Rating was created successfully');
        this.dialogRef.close();
      });
  }
}
