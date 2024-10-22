import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertisseurDegre'
})
export class ConvertisseurDegrePipe implements PipeTransform {

  transform(degre: number, type: string): number {
    if (degre && type == 'toCelsius') {
      return degre * (9 / 5) + 32;
    } 
    
    else if (degre && type == 'toFahrenheit') {
      return (degre - 32) * 5 / 9;
    } 

    return 0;
  }

}
