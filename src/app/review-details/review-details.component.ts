import { Component, OnInit } from '@angular/core';
import {Review} from "../models/review.model";
import { jsonserverService  } from '../services/jsonserver.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  constructor(private _getServerData: jsonserverService, private _getReview: jsonserverService) { }

  ngOnInit() {
    this._getReview.getReview('http://localhost:3000/reviews' + '/' + id)
        .subscribe((res) => console.log(res))

  }
}
