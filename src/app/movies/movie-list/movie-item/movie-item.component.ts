import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  constructor(private _movieService: MovieService) { }
  results = [];
  ngOnInit() {
    this._movieService.getData().subscribe(resMovieData => this.results = resMovieData);
    console.log(this.results);
  }

}
