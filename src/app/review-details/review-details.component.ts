import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // var reviews = localStorage.getItem('reviews');
  // var parsedData = JSON.parse(reviews);
  // //using id to display the relevant object
  // const id = document.location.search.slice(4);
  // var review = parsedData.find( (review)=> {
  //   return review.id == id;
  // })
  //
  // var displayTitle = review.title;
  // var displayDirector = review.director;
  // var imgInputValue = review.alt;
  // var displayCast = review.cast;
  // var displayNotes = review.notes;
  // var displayImg = review.image;
  //
  // document.getElementById('title').innerHTML = displayTitle;
  // document.getElementById('director').innerHTML = displayDirector;
  // document.getElementById('cast').innerHTML = displayCast;
  // document.getElementById('notes').innerHTML = displayNotes;
  // document.getElementById('image').setAttribute('alt', imgInputValue);
  // document.getElementById('image').setAttribute('src', displayImg);

}
