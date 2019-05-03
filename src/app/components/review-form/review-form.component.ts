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

  public reviews: Review;
  reviewForm: FormGroup;

  @ViewChild(ReviewFormImageComponent) reviewFormImageComponent: ReviewFormImageComponent;
  @ViewChild('title') titleInput: ElementRef;
  constructor(private router: Router, private http: HttpClient,
    private _getServerData: jsonserverService, private _postServerData: jsonserverService) {};

// hiding the "stay on page" modal
  isCollapsed: boolean = true;

  ngOnInit() {
    this.reviewForm = new FormGroup({
      cast: new FormControl(),
      director: new FormControl(),
      image: new FormControl(),
      notes: new FormControl(),
      title: new FormControl('', Validators.required)
    });
//setting focus on the title input
    this.titleInput.nativeElement.focus();
  }
//add image data from the review-form-image component to the FormGroup
  addImage(imgInfo) {
    this.reviewForm.patchValue({ image: imgInfo.imgURL, imageName: imgInfo.getMovie });

    document.getElementById('imagePoster').setAttribute('src', imgInfo.imgURL);
    document.getElementById('imagePoster').setAttribute('alt', imgInfo.getMovie)
  }

  onSubmit() {
//if invalid do nothing
    if(this.reviewForm.invalid) {
       return
    };

    if (this.reviewForm.valid) {
//only if valid add the new review to the array and post to server
      var newReview = this.reviewForm.value;

      this._postServerData.postServerData(newReview)
        .subscribe(data => console.log('Done posting.'));

      this.reviewFormImageComponent.imageInput.reset();
      this.reviewForm.reset();
      document.getElementById('imagePoster').setAttribute('src', '');
      document.getElementById('imagePoster').setAttribute('alt', '')
    }
//showing modal with stay on page button
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

//stay on page, apparently navigate value cannot be the current link, so used the code below
  stayOnPage() {
   this.router.navigate(['/reviews'], { replaceUrl: false, skipLocationChange: true })
//wihout page reload it stays on the current page, but is not displaying the review form
   window.document.location.reload();
  };

}
