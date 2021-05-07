import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deletespace'
})
export class DeletespacePipe implements PipeTransform {

  transform(space: string): string {
    return space.replace(' ', '');
  }

}
