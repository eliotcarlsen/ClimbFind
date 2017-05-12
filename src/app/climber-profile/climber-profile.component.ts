import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Climber } from '../climber.model';
import { ClimbersService } from '../climbers.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-climber-profile',
  templateUrl: './climber-profile.component.html',
  styleUrls: ['./climber-profile.component.css'],
  providers: [ ClimbersService ]
})
export class ClimberProfileComponent implements OnInit {
  climberId;
  climberToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private climbersService: ClimbersService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.climberId = urlParameters['id'];
    });
    this.climberToDisplay = this.climbersService.getClimberById(this.climberId);
  }

}
