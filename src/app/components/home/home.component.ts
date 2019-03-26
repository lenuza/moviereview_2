import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { latestMovies } from "../../models/latestMovies";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: latestMovies

  constructor(private client: HttpClient) { }

  ngOnInit() {

    // latestMovies(){
    var url= 'https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=86e4ae72951df30e8b2aa210d5338c8d'
        fetch(url)
          .then(response => response.json())
          .then(data => {
              this.movies = data.results.slice(15);
          })
          .catch(err => console.log('no movies found'))
  }
}
