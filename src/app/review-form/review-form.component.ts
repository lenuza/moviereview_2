import { Component, OnInit, AfterViewInit, Directive, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';
// import * as $ from 'jquery';

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
  @ViewChild(ReviewFormImageComponent) reviewFormImageComponent: ReviewFormImageComponent;
  
  addImage (imgInfo) {
    this.reviewForm.patchValue({ image: imgInfo.imgURL, imageName: imgInfo.getMovie });
    
    document.getElementById('imagePoster').setAttribute('src', imgInfo.imgURL);
    document.getElementById('imagePoster').setAttribute('alt', imgInfo.getMovie)
   }
 
  onSubmit() {
    var arrayContainer = JSON.parse(localStorage.getItem('reviews'));
    if (!arrayContainer) {
       arrayContainer = [];
    }
    var jsonData = this.reviewForm.value;
    arrayContainer.push(jsonData);
    localStorage.setItem('reviews', JSON.stringify(arrayContainer));
    console.log(arrayContainer);

    if (this.reviewForm.valid) {
      console.log("Form Submitted!");
      this.reviewFormImageComponent.imageInput.reset();
      this.reviewForm.reset();
      document.getElementById('imagePoster').setAttribute('src', '');
      document.getElementById('imagePoster').setAttribute('alt', '')
    }
  
  }

}



