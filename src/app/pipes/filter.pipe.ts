import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/Contact';
import { Customer } from '../interfaces/Customer';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: any,
    search: string,
    fieldName: keyof Customer | keyof Contact
  ): any {
    if (value.length === 0) {
      return value;
    } else {
      let filteredArray: any = [];
      for (let val of value) {
        if (val[fieldName]?.toLowerCase().includes(search.toLowerCase())) {
          filteredArray.push(val);
        }
      }
      return filteredArray;
    }
  }
}
