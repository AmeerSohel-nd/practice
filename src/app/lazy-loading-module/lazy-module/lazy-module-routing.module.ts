import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { ChildLoadComponent } from 'src/app/shared/components/child-load/child-load.component';
import { EditserverComponent } from 'src/app/shared/components/editserver/editserver.component';
import { RxjsLearningComponent } from 'src/app/shared/components/rxjs-learning/rxjs-learning.component';
import { HomeComponent } from 'src/app/shared/components/work-dashboard/home/home.component';
import { MyFailuresComponent } from 'src/app/shared/components/work-dashboard/my-failures/my-failures.component';
import { MySuccessComponent } from 'src/app/shared/components/work-dashboard/my-success/my-success.component';
import { WorkDashboardComponent } from 'src/app/shared/components/work-dashboard/work-dashboard.component';

const routes: Routes = [
  { path: '', component: WorkDashboardComponent },
  { path: 'child-load', component: ChildLoadComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: ':id', component: HomeComponent },
      { path: ':id/edit', component: EditserverComponent }
    ]
  },
  {
    path: 'my-failures',
    component: MyFailuresComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'my-success', component: MySuccessComponent },
  { path: 'rxjs-learning', component: RxjsLearningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule {}
