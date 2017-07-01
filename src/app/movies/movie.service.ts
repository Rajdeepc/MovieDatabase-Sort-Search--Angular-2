import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  private _url: string = "http://demo6727947.mockable.io/moviedata";

//inject the service
  constructor(private _http: Http) { }

  getData() {
    console.log("connected");
    return this._http.get(this._url)
      .map((response: Response) => response.json());
      
  }
  
  
}

