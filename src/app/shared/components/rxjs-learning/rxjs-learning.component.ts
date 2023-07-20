import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {
  @ViewChild('validate', { static: true })
  validate: ElementRef;

  agents: Observable<string>;
  agentName: string;
  constructor() {}

  ngOnInit() {
    console.log('rxjis');

    this.agents = new Observable((observer) => {
      try {
        observer.next('Ram');
        observer.next('Mark');
        observer.next('Sita');
      } catch (e) {
        observer.error(e);
      }
    });

    this.agents.subscribe((data) => {
      this.agentName = data;
    });
  }
  rxJsEventObservable() {
    const btnObservable$ = fromEvent(this.validate.nativeElement, 'click');

    btnObservable$.subscribe((data) => {
      console.log(data);
    });
  }
}
