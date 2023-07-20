import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ContentChild,
  ElementRef,
  AfterContentInit,
  DoCheck,
  AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'app-sucess-do',
  templateUrl: './sucess-do.component.html',
  styleUrls: ['./sucess-do.component.css']
})
export class SucessDoComponent
  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked
{
  @ContentChild('content', { static: false }) contentElement: ElementRef;
  @Input() showSomeText: string;
  @Output() showSomeTextChange = new EventEmitter();
  @Input() conditionAcess = '';
  color = 'white';
  birthday = new Date(1988, 3, 15);
  contentRecieved: string = 'hey';
  constructor() {}

  ngOnInit() {}
  onClick() {
    this.showSomeText = 'Ameer Sohel';
    this.showSomeTextChange.emit('msas =');
    // this.router.navigate(['/rxjs-learning']);
  }
  ngAfterContentInit() {
    if (this.contentElement && this.contentElement.nativeElement) {
      this.contentRecieved = this.contentElement.nativeElement.innerHTML;
    }
  }
  ngDoCheck() {
    //   if(this.contentRecieved !== 'hey'){
    // console.log('changed')
    //   }
  }
  ngAfterContentChecked() {
    console.log('contentchecked');
  }
}
