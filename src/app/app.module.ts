import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewThumbnailComponent } from './components/review-thumbnail/review-thumbnail.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { NavComponent } from './components/nav/nav.component';
import { ReviewFormImageComponent } from './components/review-form-image/review-form-image.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewFormComponent,
    ReviewThumbnailComponent,
    ReviewDetailsComponent,
    NavComponent,
    ReviewFormImageComponent,
    FooterComponent
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
