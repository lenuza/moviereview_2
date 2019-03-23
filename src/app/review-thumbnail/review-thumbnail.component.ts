import { Component, OnInit } from '@angular/core';
import {Review} from "../models/review.model";
import { GetlocalstorageService } from '../getlocalstorage.service';

@Component({
  selector: 'app-review-thumbnail',
  templateUrl: './review-thumbnail.component.html',
  styleUrls: ['./review-thumbnail.component.scss'],
})
export class ReviewThumbnailComponent implements OnInit {

 constructor(private getData: GetlocalstorageService) { }

  ngOnInit() {
  var reviews: [] = [];
  this.reviews = this.getData.getParsedData();
  console.log(reviews)

  }
}
