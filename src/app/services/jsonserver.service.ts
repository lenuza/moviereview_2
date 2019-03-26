import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Review } from '../models/review.model';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import {map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class jsonserverService {

  private url: string = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error!"); }

  getServerData(): Observable<Review> {
    return this.http.get<Review>(this.url)
                  .pipe(catchError(this.errorHandler))
  }
  getReview(id: number): Observable<Object> {
    return this.http.get(`${this.url}/${id}`)
                    .pipe(catchError(this.errorHandler))
  }

  postServerData(review: Review): Observable<Object> {
    return this.http.post(this.url, review)
                    .pipe(catchError(this.errorHandler))
  }

  deleteReview(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`)
                      .pipe(catchError(this.errorHandler))
  }
}
