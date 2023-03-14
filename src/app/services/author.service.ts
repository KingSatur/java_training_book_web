import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private readonly httpClient: HttpClient) {}

  public createAuthor(): Observable<any> {
    return this.httpClient.post(`${environment.serviceUrl}/author`, {
      name: 'Leonel',
      age: 20,
    });
  }
}
