import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, searchfiler: any): any {
    return value.filter((e: any)=>{
      //return console.log(e)
      return e.name.toLowerCase().indexOf(searchfiler) > -1;
    })
  }

}
