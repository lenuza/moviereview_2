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
    
  }
}
