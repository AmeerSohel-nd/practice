import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { WorkDashboardComponent } from 'src/app/shared/components/work-dashboard/work-dashboard.component';
import { HomeComponent } from 'src/app/shared/components/work-dashboard/home/home.component';
import { MyFailuresComponent } from 'src/app/shared/components/work-dashboard/my-failures/my-failures.component';
import { MySuccessComponent } from 'src/app/shared/components/work-dashboard/my-success/my-success.component';
import { SucessDoComponent } from 'src/app/shared/components/sucess-do/sucess-do.component';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { CustomPipePipe } from 'src/app/pipes/custom-pipe.pipe';
import { RxjsLearningComponent } from 'src/app/shared/components/rxjs-learning/rxjs-learning.component';
import { ChildLoadComponent } from 'src/app/shared/components/child-load/child-load.component';
import { EditserverComponent } from 'src/app/shared/components/editserver/editserver.component';

@NgModule({
  declarations: [
    WorkDashboardComponent,
    HomeComponent,
    MyFailuresComponent,
    MySuccessComponent,
    SucessDoComponent,
    HighlightDirective,
    CustomPipePipe,
    RxjsLearningComponent,
    ChildLoadComponent,
    EditserverComponent
  ],
  imports: [CommonModule, LazyModuleRoutingModule]
})
export class LazyModuleModule {}
