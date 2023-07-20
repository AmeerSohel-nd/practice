import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomPipePipe } from 'src/app/pipes/custom-pipe.pipe';
import { SucessDoComponent } from '../../sucess-do/sucess-do.component';

import { MySuccessComponent } from './my-success.component';

describe('MySuccessComponent', () => {
  let component: MySuccessComponent;
  let fixture: ComponentFixture<MySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MySuccessComponent, CustomPipePipe, SucessDoComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
