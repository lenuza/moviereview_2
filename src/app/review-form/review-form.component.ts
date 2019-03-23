import { Component, OnInit, AfterViewInit, Directive, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';
import {Router} from '@angular/router';
// import * as $ from 'jquery';

import { ReviewFormImageComponent } from '../review-form-image/review-form-image.component';
import {Review} from "../models/review.model";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})

export class ReviewFormComponent implements OnInit {

  @ViewChild(ReviewFormImageComponent) reviewFormImageComponent: ReviewFormImageComponent;
  constructor(private router: Router) {};
// hiding the stay on page button modal
  isCollapsed: boolean = true;

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
// add image data from the review-form-image component to the FormGroup
  addImage (imgInfo) {
    this.reviewForm.patchValue({ image: imgInfo.imgURL, imageName: imgInfo.getMovie });

    document.getElementById('imagePoster').setAttribute('src', imgInfo.imgURL);
    document.getElementById('imagePoster').setAttribute('alt', imgInfo.getMovie)
  }
//saving form data in local storage
  onSubmit() {
//if first review - create review array to hold the review objects
    var arrayContainer = JSON.parse(localStorage.getItem('reviews'));
    if (!arrayContainer) {
       arrayContainer = [];
    }
//then add the current review to the array
    var jsonData = this.reviewForm.value;
    arrayContainer.push(jsonData);
    localStorage.setItem('reviews', JSON.stringify(arrayContainer));
//Form reset
    if (this.reviewForm.valid) {
      console.log("Form Submitted!");
      this.reviewFormImageComponent.imageInput.reset();
      this.reviewForm.reset();
      document.getElementById('imagePoster').setAttribute('src', '');
      document.getElementById('imagePoster').setAttribute('alt', '')
    }
// Showing modal with stay on page button
    this.isCollapsed = false;
//redirect to review page
    setTimeout(() => {
      this.router.navigateByUrl('/reviews');
    }, 5000);

  //   setInterval(() => {
  //     var seconds = 5;
  //     document.getElementById('seconds').innerHTML = `${seconds}`;
  //     seconds--;
  //     if(seconds <= 0) {
  //       clearInterval();
  //     }
  //   }, 1000);
  //   clearInterval();
  }
//Stay on page, apparently navigate vlaue cannot be the current link, so used the code below
  stayOnPage() {
   this.router.navigate(['/reviews'], { replaceUrl: false, skipLocationChange: true })
//wihout page reload it stays on the current page, but is not displaying the review form
   window.document.location.reload();
  };
}
