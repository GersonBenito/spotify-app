import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | any = null, sort: string = 'asc' ): TrackModel[] {
    try {
      if(value !== null){
        const tmpList = value.sort((a, b): any =>{
          if(a[args] < b[args]){
            return -1;
          }else if(a[args] === b[args]){
            return 0;
          }else if(a[args] > b[args]){
            return 1;
          }
        })
        return (sort === 'asc') ? tmpList : tmpList.reverse();
      }else{
        return value;
      }
    } catch (error) {
      console.log(error);
      return value;
    }
  }

}
