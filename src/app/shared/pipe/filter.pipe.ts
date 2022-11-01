import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class Filter implements PipeTransform {

    transform(value: any, filter: string) {
       if (value.length === 0 || filter === '') {
        return value;
       }
       const jobListData = [];
       for ( const i of value.data.data) {
        if (i['jobTitle'] === filter) {
          jobListData.push(i);
        }
       }
       return jobListData;
    }

}
