import { Component, OnInit } from '@angular/core';

import {Review} from "../models/review.model";

@Component({
  selector: 'app-review-thumbnail',
  templateUrl: './review-thumbnail.component.html',
  styleUrls: ['./review-thumbnail.component.scss']
})
export class ReviewThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   // parsedData.forEach (review => {
   //   var imgContainer = document.createElement('img');
   //   var reviewContainer = document.createElement('div');
   //   var displayTitle = review.title;
   //   var displayImg = review.image;
   //   var addNewReview = document.getElementById('add-review').appendChild(reviewContainer);
   //   addNewReview.className = ('another-review new-review');
   //   var title = document.createElement('h3');
   //   var addTitle = addNewReview.appendChild(title);
   //   addTitle.innerHTML = displayTitle;
   //   var createAnchor = document.createElement('a');
   //   var anchorDetails = addNewReview.appendChild(createAnchor);
   //   anchorDetails.setAttribute('aria-label','detailed review');
   //   anchorDetails.setAttribute('href',`detailed-review.html?id=${review.id}`);
   //   var addNewImg = anchorDetails.appendChild(imgContainer).setAttribute('src', displayImg);
  //  })


 var reviews = localStorage.getItem('reviews');
 var parsedData = JSON.parse(reviews);
 console.log(parsedData)

  }

}
