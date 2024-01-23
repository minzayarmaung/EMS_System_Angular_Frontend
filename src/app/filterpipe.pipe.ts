import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, searchfiler: any): any {
    return value.filter((e: any)=>{
      // //return console.log(e)
      // return e.name.toLowerCase().indexOf(searchfiler) > -1;
      // // return e.email.toLowerCase().indexOf(searchfiler) > -1;
      // e.name.toLowerCase().indexOf(searchfiler) > -1;
      // e.email.toLowerCase().indexOf(searchfiler) > -1;

      // Now You can either search with Name or with Email or NRC or Interest
      return e.email.toLowerCase().indexOf(searchfiler) > -1 || e.name.toLowerCase().indexOf(searchfiler) > -1
      || e.nrc.indexOf(searchfiler) > -1 || e.interest.toLowerCase().indexOf(searchfiler) > -1;
    })
  }

}
