import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fresh'
})
export class FreshPipe implements PipeTransform {

  transform(value: any[], search: string) {
    if(!value || !search)
      return value;
    return value.filter((item)=>
     item.name.toLowerCase().indexOf(search.toLocaleLowerCase())  !== -1 );
  }
  
}
