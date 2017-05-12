import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Climber } from '../climber.model';
import { ClimbersService } from '../climbers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClimbersService]
})
export class HomeComponent implements OnInit {
  climbers: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;
  constructor(private router: Router, private climbersService: ClimbersService) { }
  ngOnInit() {
    this.climbers = this.climbersService.getClimbers();
  }
  goToProfilePage(clickedClimber){
    this.router.navigate(['climbers', clickedClimber.$key]);
  }
}
