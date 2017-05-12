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
    return this.database.object('climbers/' + climberId);
  }
  editClimber(updatedClimber){
    var climberInFirebase = this.getClimberById(updatedClimber.$key);
    climberInFirebase.update({firstname: updatedClimber.firstname, lastname: updatedClimber.lastname, residence: updatedClimber.residence, bio: updatedClimber.bio, experience: updatedClimber.experience, type: updatedClimber.type, crag: updatedClimber.crag});
  }
  deleteThisClimber(climber){
    var climberInFirebase = this.getClimberById(climber.$key);
    climberInFirebase.remove();
  }
}
