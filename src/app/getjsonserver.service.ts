import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Review} from "./models/review.model";

@Injectable({
  providedIn: 'root'
})
export class GetjsonserverService {

  private url: string = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) { }

  getServerData(): Observable<Review[]> {
    return this.http.get<Review[]>(this.url);
  }
}
