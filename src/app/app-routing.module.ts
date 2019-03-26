import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewThumbnailComponent } from './review-thumbnail/review-thumbnail.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: ReviewFormComponent },
  { path: 'reviews',
      children: [
        { path: '', component: ReviewThumbnailComponent },
        { path: ':id', component: ReviewDetailsComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
