import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewThumbnailComponent } from './review-thumbnail/review-thumbnail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: ReviewFormComponent },
  { path: 'reviews', component: ReviewThumbnailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
