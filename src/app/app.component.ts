import { Component } from '@angular/core';
import { SharedConstants } from './shared/common/constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = SharedConstants.appName;
}
