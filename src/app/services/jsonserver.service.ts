import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Review } from '../models/review.model';
import { Observable } from 'rxjs/Observable';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class jsonserverService {

  private url: string = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) { }

  getServerData(): Observable<Review> {
    return this.http.get<Review>(this.url);
                    // .catch(this.errorCatcher);
  }
  getReview(id: number): Observable<Review> {
    return this.http.get<Review>(id);
                    // .catch(this.errorCatcher);
  }
  // errorCatcher(error: HttpErrorResponse) {
  //   return Observable.throw(error.messaage || 'Server error');
  //}
  postServerData(review: Review): Observable<Object> {
    return this.http.post(this.url, review, {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    });
  }
  // errorCatcher(error: HttpErrorResponse) {
  //   return Observable.throw(error.messaage || 'Server error');
  //}

  deleteReview(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }
}
