import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-success',
  templateUrl: './my-success.component.html',
  styleUrls: ['./my-success.component.css']
})
export class MySuccessComponent implements OnInit {
  name: string = 'Ameer worker';
  fame: string = 'sohel';
  work: string = '';
  showingText: string = 'Hi';
  favoriteColorControl = new FormControl('');
  states: string[] = ['India', 'Pakistan', 'Bangladesh', 'Russia'];
  constructor(private router: Router) {}

  ngOnInit() {}
  addState(value) {
    this.states = [];
    this.states.push(value);
    this.fame += value;
    this.showingText = value;
  }
  onClick() {
    this.router.navigate(['/lazy/rxjs-learning']);
  }
}
