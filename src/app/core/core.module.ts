import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    }
  ],
  exports: []
})
export class CoreModule {
  constructor() {}
}
