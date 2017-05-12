import { Component, OnInit } from '@angular/core';
import { ClimbersService } from '../climbers.service';
import { Climber } from '../climber.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClimbersService]
})
export class AdminComponent implements OnInit {

  constructor(private climbersService: ClimbersService) { }

  ngOnInit() {
  }
  submitClimber(firstname: string, lastname: string, residence: string, bio: string, experience: string, type: string, crag: string) {
    var newClimber: Climber = new Climber(firstname, lastname, residence, bio, experience, type, crag);
    this.climbersService.saveClimber(newClimber);
  }
}
