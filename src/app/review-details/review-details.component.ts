import { Component, OnInit } from '@angular/core';
import {Review} from "../models/review.model";
import { GetlocalstorageService } from '../getlocalstorage.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  constructor(private getData: GetlocalstorageService) { }

   ngOnInit() {
   var reviews: [] = [];
   this.reviews = this.getData.getParsedData();
   console.log(reviews)

   }

  // var reviews = localStorage.getItem('reviews');
  // var parsedData = JSON.parse(reviews);
  // //using id to display the relevant object
  // const id = document.location.search.slice(4);
  // var review = parsedData.find( (review)=> {
  //   return review.id == id;
  // })

}
