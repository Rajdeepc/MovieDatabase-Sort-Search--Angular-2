import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _movieService: MovieService) { }
  results = [];
  ngOnInit() {
    this._movieService.getData().subscribe(resMovieData => this.results = resMovieData);
    console.log(this.results);
  }

}
