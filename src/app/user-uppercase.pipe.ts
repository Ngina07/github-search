import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userUppercase'
})
export class UserUppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   return value.toUpperCase();
  }
}


