import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  private _url: string = "http://api.themoviedb.org/3/movie/now_playing?api_key=e649c1ec4f43c9f8ea307ec5aec0e891";

//inject the service
  constructor(private _http: Http) { }

  getData() {
    console.log("connected");
    return this._http.get(this._url)
      .map((response: Response) => response.json());
      
  }
  
}

