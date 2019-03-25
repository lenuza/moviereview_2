import { Component, OnInit } from '@angular/core';
import {Review} from "./models/review.model";
import { GetlocalstorageService } from '../getlocalstorage.service';
import { GetjsonserverService } from '../getjsonserver.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review-thumbnail',
  templateUrl: './review-thumbnail.component.html',
  styleUrls: ['./review-thumbnail.component.scss'],
})
export class ReviewThumbnailComponent implements OnInit {
  public reviews = [];
 // constructor(private getData: GetlocalstorageService) { }
  constructor(private getServerData: GetjsonserverService) { }

  ngOnInit() {
  // var reviews: [] = [];
  // this.reviews = this.getData.getParsedData();
  // console.log(reviews)

    this.getServerData.getServerData()
        .subscribe((data) => this.reviews = data);
  }
}
