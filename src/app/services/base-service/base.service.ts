import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(public httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(
      tap((res) => {}),
      catchError((e) => {
        console.log(e);
        throw e;
      })
    );
  }

  post(url: string, params: object): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient
      .post(`${url}`, JSON.stringify(params), {
        headers,
      })
      .pipe(
        tap(async (res) => {
          console.log('rehjer');
        }),
        catchError((e) => {
          console.log(e);
          throw e;
        })
      );
  }
}
