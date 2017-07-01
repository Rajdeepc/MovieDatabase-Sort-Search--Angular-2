import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { MovieService } from './movies/movie.service';
import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movies.component';

import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';

import { AboutComponent } from './about/about.component';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    MovieItemComponent,
    AboutComponent,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
