import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { FilterPipe } from '../../filter.pipe';
import { OrderByPipe } from '../../order.pipe';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
 
})
export class MovieListComponent implements OnInit {
column: string = 'movie_title';
isDesc: boolean = false;

  constructor(private _movieService: MovieService) { }
  results = [];
  ngOnInit() {
    this._movieService.getData().subscribe(resMovieData => this.results = resMovieData);
    console.log(this.results);
  }
  // Declare local variable
direction: number;
// Change sort function to this: 
sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
}
}
