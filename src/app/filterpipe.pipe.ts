import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  // In this Function I created all the search into lowercasee , so that there won't be any problems about searching through
  // data whatever the Case they want.

  transform(value: any, searchfiler: any): any {
    const lowerCaseSearch = searchfiler.toLowerCase(); // Convert Search into LowerCase

    return value.filter((e: any)=>{
      // Convert all fields to lowercase for case-insensitive comparison
      const email = e.email.toLowerCase();
      const name = e.name.toLowerCase();
      const nrc = e.nrc.toLowerCase();
      const interest = e.interest.toLowerCase();

      return [email, name, nrc, interest].some(item => item.includes(lowerCaseSearch));
    })
  }
}

      // //return console.log(e)
      // return e.name.toLowerCase().indexOf(searchfiler) > -1;
      // // return e.email.toLowerCase().indexOf(searchfiler) > -1;
      // e.name.toLowerCase().indexOf(searchfiler) > -1;
      // e.email.toLowerCase().indexOf(searchfiler) > -1;

      // Now You can either search with Name or with Email or NRC or Interest
