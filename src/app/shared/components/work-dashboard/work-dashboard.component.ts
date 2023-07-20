import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-work-dashboard',
  templateUrl: './work-dashboard.component.html',
  styleUrls: ['./work-dashboard.component.css']
})
export class WorkDashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  logIn() {
    this.authService.logIn();
  }

  logOut() {
    this.authService.logOut();
  }
}
