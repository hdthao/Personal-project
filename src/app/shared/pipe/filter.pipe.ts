import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class Filter implements PipeTransform {

  transform(items: any[], searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.jobTitle.toLocaleLowerCase().includes(searchText);
    });
  }

}
