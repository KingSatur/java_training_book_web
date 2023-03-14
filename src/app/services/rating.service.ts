import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(private readonly httpClient: HttpClient) {}

  public getRatingsPerBookId(): Observable<any> {
    return this.httpClient.get(`${environment.serviceUrl}/rating/21312`);
  }

  public createRatingForBook(): Observable<any> {
    return this.httpClient.post(`${environment.serviceUrl}/rating`, {
      bookId: 13,
      description: 'description',
      score: 300,
    });
  }

  public getBooks(): Observable<any> {
    return this.httpClient.get(`${environment.serviceUrl}/book?page=1&limi=5`);
  }
}
