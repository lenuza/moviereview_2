import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetlocalstorageService {

  getParsedData(parsedData) {
    var reviews = localStorage.getItem('reviews');

    if(reviews) {
      var parsedData = JSON.parse(reviews);
      return parsedData;
    }

  }
}
