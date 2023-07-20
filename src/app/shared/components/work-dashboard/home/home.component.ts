import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserDetails } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
  implements OnChanges, OnInit, DoCheck, AfterViewChecked, OnDestroy
{
  postData: UserDetails = null;
  userData: {
    id: string;
    name: string;
  };
  paramsSubscription: Subscription;
  public currentState: string;
  public previousState: string;
  public currentNumb: string;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges() {
    this.currentNumb = 'two way Binding';
    alert('hoooooo');
  }
  ngOnInit() {
    this.postService.getPost().subscribe((data) => {
      this.postData = data;
    });

    this.userData = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.userData.id = params.id;
      this.userData.name = params.name;
    });
    const obser = new Observable((sub) => {
      sub.next('observable is working1');
      sub.next('observable is working2');
      sub.next('observable is working3');
      sub.next('observable is working4');
      sub.next('observable is working5');
      sub.next('observable is working6');
    });
    obser.subscribe((res) => {
      // console.log(res);
    });

    const prom = new Promise((res) => {
      res('promise is working1');
      res('promise is working2');
      res('promise is working3');
      res('promise is working4');
      res('promise is working5');
      res('promise is working6');
    });
    prom.then((result) => {
      // console.log(result);
    });
  }

  ngAfterViewChecked() {
    if (this.postData !== null) {
      // console.log(this.postData);
      // console.log('Still did get the data from post service');
    } else {
      // console.log('Still didn\'t get the data from post service');
    }
  }
  ngDoCheck() {
    console.log('ngDoCheck', this.currentState);
    if (Number(this.currentState) !== Number(this.previousState)) {
      this.previousState = this.currentState;
      console.log(this.previousState);
    }
  }

  updateState() {
    this.currentState = this.currentNumb;
    console.log('hey', this.currentNumb);
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
