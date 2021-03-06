import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import { jsonserverService  } from '../../services/jsonserver.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {
  public reviews: Review;
  public id: number;
  public review: Object;
  public  errorMessage;
  public isVisible: boolean;
  public isShown: boolean;

  constructor(private _getServerData: jsonserverService, private _getReview: jsonserverService,
              private _router: Router) { }

  ngOnInit() {

    var id = document.location.pathname.split("/").pop();
    var idNum = parseInt(id); // makes the id an integer as typescript gives error about its type

    this._getReview.getReview(idNum)
        .subscribe((data) => this.review = data)
    }
    editReview(reviewId: number) {
      this._router.navigate(['/edit', reviewId]);

  }

}
