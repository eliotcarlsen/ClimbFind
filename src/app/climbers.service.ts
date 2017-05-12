import { Injectable } from '@angular/core';
import { Climber } from './climber.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClimbersService {
  climbers: FirebaseListObservable<any[]>
  constructor(private database: AngularFireDatabase) {
    this.climbers = database.list('climbers');
  }
  saveClimber(newClimber: Climber){
    this.climbers.push(newClimber);
  }
  getClimbers(){
    return this.climbers;
  }
  getClimberById(climberId){

  }

}
