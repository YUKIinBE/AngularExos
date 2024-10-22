import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinute'
})
export class ToMinutePipe implements PipeTransform {

  transform(second: number): string {
    
    let format = '';
    if (second < 60) format = `${second}`;
    else {
      const minute = Math.floor(second / 60);
      second = Math.floor(second % 60);
      format = `${minute} : ${second}`
    }
    return format;
  }

}
