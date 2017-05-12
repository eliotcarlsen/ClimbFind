import { Component, OnInit, Input } from '@angular/core';
import { Climber } from '../climber.model';
import { ClimbersService } from '../climbers.service';

@Component({
  selector: 'app-edit-climber',
  templateUrl: './edit-climber.component.html',
  styleUrls: ['./edit-climber.component.css'],
  providers: [ClimbersService]
})
export class EditClimberComponent implements OnInit {
  @Input() selectedClimber;
  constructor(private climbersService: ClimbersService) { }

  ngOnInit() {
  }
  updateClimber(climberToUpdate){
    this.climbersService.editClimber(climberToUpdate);
  }
  deleteClimber(climberToDelete){
    this.climbersService.deleteThisClimber(climberToDelete);
  }
}
