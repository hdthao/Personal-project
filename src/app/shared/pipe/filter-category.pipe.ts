import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory',
})

export class FilterCategory implements PipeTransform {

  transform(items: any[], searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return items.filter(it => {
      return it.category.name === searchText;
    });
  }

}
