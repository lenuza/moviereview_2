import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';

import { ReviewFormImageComponent } from './review-form-image/review-form-image.component';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  constructor() { }

  reviewForm: FormGroup;

  ngOnInit() {
    this.reviewForm = new FormGroup({
      title: new FormControl(),
      director: new FormControl(),
      imagename: new FormControl(),
      cast: new FormControl(),
      notes: new FormControl()
    });
  }

  onSubmit(): void {

    console.log(this.reviewForm.value);
      // if (this.reviewForm.valid) {
      //   console.log("Form Submitted!");
      //   this.reviewForm.reset();
  }


}


  //   var imgValue = document.querySelector('#image').value;
  //
  //   $.ajax({
  //     url: `https://api.unsplash.com/search/photos?page=1&query=${imgValue}`,
  //     headers: {
  //       Authorization: 'Client-ID f81bd9b86a0d0fa82b91ba4818581ebe62c2a8310edb4c9d9dfe3744fc6b742b'
  //     }
  //   })
  //   .done(addImage)
  //   .fail(function () {
  //         alert('Error while making this request');
  //   });
  // });

    // function addImage(data, imgValue) {
    //   let htmlContent = '';
    //   if (data && data.results && data.results.length > 0) {
    //     var valueImg = document.querySelector('#image').value; // not sure why won't take the value
    //     const firstImage = data.results[0];
    //     htmlContent = `<figure>
    //     <img src='${firstImage.urls.small}' alt='${valueImg}'>
    //     <figcaption>${valueImg} by ${firstImage.user.name}</figcaption>
    //     </figure>`;
    //   } else {
    //        htmlContent = '<div>No images available</div>';
    //   }
    //
    //  document.getElementById('results').innerHTML = htmlContent;
    // };

  // // onSubmit() {
  // //
  // // }
  //   // event.preventDefault()
  //   // var reviewData = $(this).serializeArray();
  //   // //using reduce to simplify the object in array in array structure, so now we have only obejcts in one array
  //   // reviewData = reviewData.reduce((reviewData, obj) => {var goodObj = {}; goodObj[obj.name] = obj.value;
  //   // return Object.assign(reviewData, goodObj)}, {})
  //   //
  //   // reviewData['image'] = $('img').attr('src');
  //   //
  //   // var arrayContainer = JSON.parse(localStorage.getItem('reviews'));
  //   // if (!arrayContainer) {
  //   //     arrayContainer = [];
  //   // }
  //   // nextIndex = arrayContainer.length
  //   // reviewData['id'] = nextIndex;
  //   // var jsonData = reviewData;
  //   // arrayContainer.push(jsonData);
  //   // localStorage.setItem('reviews', JSON.stringify(arrayContainer));
  // }



//
//
// $('.img-button').on('click', function(event) {
//   event.preventDefault();
//   var imgValue = document.querySelector('#image').value;
//
//   $.ajax({
//     url: `https://api.unsplash.com/search/photos?page=1&query=${imgValue}`,
//     headers: {
//       Authorization: 'Client-ID f81bd9b86a0d0fa82b91ba4818581ebe62c2a8310edb4c9d9dfe3744fc6b742b'
//     }
//   })
//   .done(addImage)
//   .fail(function () {
//         alert('Error while making this request');
//   });
// });
//
//   function addImage(data, imgValue) {
//     let htmlContent = '';
//     if (data && data.results && data.results.length > 0) {
//       var valueImg = document.querySelector('#image').value; // not sure why won't take the value
//       const firstImage = data.results[0];
//       htmlContent = `<figure>
//       <img src='${firstImage.urls.small}' alt='${valueImg}'>
//       <figcaption>${valueImg} by ${firstImage.user.name}</figcaption>
//       </figure>`;
//     } else {
//          htmlContent = '<div>No images available</div>';
//     }
//
//    document.getElementById('results').innerHTML = htmlContent;
//   };
