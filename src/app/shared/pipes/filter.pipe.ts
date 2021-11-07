import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '@shared/services/types';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: Customer[], searchText: string): Customer[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toString().toLocaleLowerCase();

    return items.filter((item) => {
      return Object.values(item)
        .toString()
        .toLocaleLowerCase()
        .includes(searchText);
    });
  }
}
