import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'book',
    // canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTRACT-MANAGER'],
    },
    loadChildren: () =>
      import('./feature/book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'author',
    // canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTRACT-MANAGER'],
    },
    loadChildren: () =>
      import('./feature/author/author.module').then((m) => m.AuthorModule),
  },
  {
    path: 'rating',
    // canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTRACT-MANAGER'],
    },
    loadChildren: () =>
      import('./feature/rating/rating.module').then((m) => m.RatingModule),
  },
  { path: '', redirectTo: 'book', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
