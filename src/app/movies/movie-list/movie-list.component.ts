import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieItemComponent } from './movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

   constructor(private _movieService: MovieService) { }
  results = [];
  ngOnInit() {
    this._movieService.getData().subscribe(resMovieData => this.results = resMovieData);
    console.log(this.results);
  }
  selected(id){
    console.log(id);
  }
}
