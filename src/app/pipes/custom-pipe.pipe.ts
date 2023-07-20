import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray',
  pure: true
})
export class CustomPipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.join();
  }
}
