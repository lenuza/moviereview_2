import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';

@Component({
  selector: 'app-review-form-image',
  templateUrl: './review-form-image.component.html',
  styleUrls: ['./review-form-image.component.scss' ]
})
export class ReviewFormImageComponent implements OnInit {

  @Output() addImage = new EventEmitter();
  @Output() addImageURL = new EventEmitter();

  constructor() { }

  imageInput: FormGroup;

  ngOnInit() {
    this.imageInput = new FormGroup ({
         imagename: new FormControl(),
    });
  }

  onSubmit() {
    var getMovie = (<HTMLInputElement>document.getElementById('image')).value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=86e4ae72951df30e8b2aa210d5338c8d&query=${getMovie}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var firstMovie = data.results[0];
        var getImage = firstMovie.poster_path;
        var imgURL =  `http://image.tmdb.org/t/p/w185//${getImage}`;

        this.addImage.emit(imgURL);
        this.addImageURL.emit( getMovie);

      })
      .catch(err => console.log('image not found'))

  }


}
