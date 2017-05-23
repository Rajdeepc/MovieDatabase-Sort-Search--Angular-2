import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { MovieListComponent } from './movies/movie-list/movie-list.component';
 import { AboutComponent } from './about/about.component';
 import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
// Route Configuration
export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie_details', component: MovieListComponent },
   { path: 'all_details', component: MovieDetailsComponent },
  { path: 'about', component: AboutComponent }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);