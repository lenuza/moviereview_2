import { Component, OnInit, AfterViewInit, Directive, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ReviewFormImageComponent } from '../review-form-image/review-form-image.component';
import { Review } from "../../models/review.model";
import { jsonserverService  } from '../../services/jsonserver.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})

export class ReviewFormComponent implements OnInit {

  @ViewChild(ReviewFormImageComponent) reviewFormImageComponent: ReviewFormImageComponent;
  constructor(private router: Router, private http: HttpClient,
    private _getServerData: jsonserverService, private _postServerData: jsonserverService) {};
// hiding the "stay on page" modal
  isCollapsed: boolean = true;

  reviewForm: FormGroup;
  ngOnInit() {
    this.reviewForm = new FormGroup({
      cast: new FormControl(),
      director: new FormControl(),
      image: new FormControl(),
      notes: new FormControl(),
      title: new FormControl('', Validators.required)
    });
  }

// add image data from the review-form-image component to the FormGroup
  addImage (imgInfo) {
    this.reviewForm.patchValue({ image: imgInfo.imgURL, imageName: imgInfo.getMovie });

    document.getElementById('imagePoster').setAttribute('src', imgInfo.imgURL);
    document.getElementById('imagePoster').setAttribute('alt', imgInfo.getMovie)
  }
//saving form data on our fake jason server
  onSubmit() {

//then add the new review to the array
    var newReview = this.reviewForm.value;
  
    this._postServerData.postServerData(newReview)
      .subscribe(data => console.log('Done posting.'));

//Form reset
    if (this.reviewForm.valid) {
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
    }, 7000);
//countdown for redirect
    var seconds = 5;
    var counter = setInterval(() => {
      document.getElementById('seconds').innerHTML = `${seconds}`;
      seconds--;
      if(seconds < 0) {
      clearInterval(counter);
      }
    }, 1000);
  }
//Stay on page, apparently navigate vlaue cannot be the current link, so used the code below
  stayOnPage() {
   this.router.navigate(['/reviews'], { replaceUrl: false, skipLocationChange: true })
//wihout page reload it stays on the current page, but is not displaying the review form
   window.document.location.reload();
  };

  reviews: Review
}
