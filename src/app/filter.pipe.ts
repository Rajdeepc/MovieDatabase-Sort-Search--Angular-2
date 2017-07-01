import { Pipe, PipeTransform } from '@angular/core';

//pipe decorator
@Pipe({
  name: 'moviename'
})
export class FilterPipe implements PipeTransform {

 transform(categories: any, searchText: any): any {
    if(searchText == null) return categories;

    return categories.filter(function(moviename){
      return moviename.movie_title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
