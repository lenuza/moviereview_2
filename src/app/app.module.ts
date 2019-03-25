import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewThumbnailComponent } from './review-thumbnail/review-thumbnail.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { NavComponent } from './nav/nav.component';
import { ReviewFormImageComponent } from './review-form-image/review-form-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewFormComponent,
    ReviewThumbnailComponent,
    ReviewDetailsComponent,
    NavComponent,
    ReviewFormImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
