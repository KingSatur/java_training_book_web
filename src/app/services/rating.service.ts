import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(private readonly httpClient: HttpClient) {}

  public getRatingsPerBookId(id: number): Observable<any> {
    return this.httpClient.get(`${environment.serviceUrl}/rating/${id}`);
  }

  public createRatingForBook(data: {
    bookId: number;
    description: string;
    score: number;
  }): Observable<any> {
    return this.httpClient.post(`${environment.serviceUrl}/rating`, {
      bookId: data?.bookId,
      description: data?.description,
      score: data?.score,
    });
  }
}
