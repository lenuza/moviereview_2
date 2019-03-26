import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewThumbnailComponent } from './components/review-thumbnail/review-thumbnail.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';

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
