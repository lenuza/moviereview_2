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
    return this.http.get<Response>(this.url);
                    // .catch(this.errorCatcher);
  }
  // errorCatcher(error: HttpErrorResponse) {
  //   return Observable.throw(error.messaage || 'Server error');
  //}
  postServerData(review: Review): Observable<Review> {
    return this.http.post('http://localhost:3000/reviews', review, {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    });
  }
  // errorCatcher(error: HttpErrorResponse) {
  //   return Observable.throw(error.messaage || 'Server error');
  //}

  // deleteServerData(id: number) {
  //   return this.http.delete(this.url + '/' + id);
  // }
}