import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private client: HttpClient) { }

  ngOnInit() {
    // latestMovies(){
      // https://api.themoviedb.org/3//discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
     //  this.client.get(`${DATA_ACCESS_PREFIX}/traveller.json`)
     // .subscribe( (data) => console.log(JSON.stringify(data)));
    // }
  }

}
