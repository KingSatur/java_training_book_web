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

  public createBook(data: {
    name: string;
    editorial: string;
    authorId: number;
  }): Observable<any> {
    const { name, editorial, authorId } = data;
    return this.httpClient.post(`${environment.serviceUrl}/book`, {
      name,
      editorial,
      authorId,
    });
  }

  public getBookById(id: number): Observable<any> {
    return this.httpClient.get(`${environment.serviceUrl}/book/${id}`);
  }

  public getBooks(page: number = 1, limit: number = 5): Observable<BookDto[]> {
    return this.httpClient.get<BookDto[]>(
      `${environment.serviceUrl}/book?page=${page}&limit=${limit}`
    );
  }
}
