import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { BookDto } from 'src/shared/dto/book-dto';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private readonly httpClient: HttpClient) {}

  public createBook(): Observable<any> {
    return this.httpClient.post(`${environment.serviceUrl}/book`, {
      name: 'Hunger games',
      editorial: 20,
      authorId: 1,
    });
  }

  public getBookById(): Observable<any> {
    return this.httpClient.get(`${environment.serviceUrl}/book/12213`);
  }

  public getBooks(): Observable<BookDto[]> {
    return this.httpClient.get<BookDto[]>(
      `${environment.serviceUrl}/book?page=1&limit=5`
    );
  }
}
