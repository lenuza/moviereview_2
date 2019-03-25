import { Component, OnInit } from '@angular/core';
import {Review} from "../models/review.model";
import { GetlocalstorageService } from '../services/getlocalstorage.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  constructor(private getData: GetlocalstorageService) { }

  ngOnInit() {
    // var reviews: [] = [];
    // this.reviews = this.getData.getParsedData();
    // console.log(reviews)

    //using id to display the relevant object
    const title = document.location.toString();
    // this.reviews.find( (review) => {
    // return review.ttile == title;
    // })
    console.log(title)
  }
}
