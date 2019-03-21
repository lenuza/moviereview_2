import { Component, OnInit, AfterViewInit, Directive, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';
import * as $ from 'jquery';

import { ReviewFormImageComponent } from '../review-form-image/review-form-image.component';
import {Review} from "../models/review.model";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})

export class ReviewFormComponent implements OnInit {

  constructor() { }

  reviewForm: FormGroup;
  ngOnInit() {
    this.reviewForm = new FormGroup({
      cast: new FormControl(),
      director: new FormControl(),
      image: new FormControl(),
      imageName: new FormControl(),
      notes: new FormControl(),
      title: new FormControl()
    });

  }

  addImage (image, alt) {
    console.log('zzzzzzzzzzzzzzz', image, alt);
    this.reviewForm.patchValue({ image: image });
    // this.reviewForm.patchValue({ imageName: alt });
  }
  // addImageURL (alt) {
  //   console.log('zzzzzzzzzzzzzzz', alt);
  //   this.reviewForm.patchValue({ imageName: alt });
  // // this.reviewForm.patchValue({ imageName: alt });
  // }

  onSubmit() {
   // reviewData['image'] = $('img').attr('src');
    var arrayContainer = JSON.parse(localStorage.getItem('reviews'));
    if (!arrayContainer) {
       arrayContainer = [];
    }
    var jsonData = this.reviewForm.value;
    arrayContainer.push(jsonData);
    localStorage.setItem('reviews', JSON.stringify(arrayContainer));
    console.log(arrayContainer);
  }

}
// export class AppComponent implements  AfterViewInit {
//
//   @ViewChild(ReviewFormImageComponent) reviewFormImageComponent: ReviewFormImageComponent;
//
//   ngAfterViewInit() {
//     console.log("reviewFormImageComponent:", this.reviewFormImageComponent);
//   }
// }
