import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from "../../models/review.model";
import { jsonserverService  } from '../../services/jsonserver.service';

@Component({
  selector: 'app-review-thumbnail',
  templateUrl: './review-thumbnail.component.html',
  styleUrls: ['./review-thumbnail.component.scss'],
})
export class ReviewThumbnailComponent implements OnInit {
  public reviews: Review;
  public  errorMessage;

 // constructor(private getData: GetlocalstorageService) { }
  constructor(private _getServerData: jsonserverService, private _deleteReview: jsonserverService) { }

  ngOnInit() {

    this._getServerData.getServerData()
        .subscribe((data) => this.reviews = data,
                   error => this.errorMessage = error);
  }

  deleteReview(id) {
    this._deleteReview.deleteReview(id)
        .subscribe()

    this._getServerData.getServerData()
        .subscribe((data) => this.reviews = data,
                   error => this.errorMessage = error);
  };

}
