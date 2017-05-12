import { Pipe, PipeTransform } from '@angular/core';
import { Climber } from './climber.model';

@Pipe({
  name: 'filterType',
  pure: false
})

export class FilterTypePipe implements PipeTransform {
  transform(climber: Climber[], inputType) {
    var trad: Climber[]=[];
    var sport: Climber[]=[];
    var boulderers: Climber[]=[];
    if(inputType === "trad"){
      for (var i = 0; i < climber.length; i++){
        if(climber[i].type === "trad"){
          trad.push(climber[i]);
        }
      }
      return trad;
      } else if (inputType === "sport"){
        for (var i = 0; i < climber.length; i++){
          if(climber[i].type === "sport"){
            sport.push(climber[i]);
          }
        }
        return sport;
      } else if (inputType === "boulderer"){
        for (var i = 0; i < climber.length; i++){
          if(climber[i].type === "boulderer"){
            boulderers.push(climber[i]);
          }
        }
        return boulderers;
      } else {
        return climber;
      }
    }
}
