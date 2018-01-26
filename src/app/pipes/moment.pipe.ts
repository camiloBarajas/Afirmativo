import * as moment from 'moment/moment';
import { Pipe, PipeTransform, Output } from '@angular/core';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: any, outputFormat: string = 'lll', inputFormat: string = 'YYYY-MM-DD hh:mm:ss', locale: string = 'es'): any {
    const output = outputFormat !== 'relative' ? moment(value, inputFormat).format(outputFormat) :  moment(value, inputFormat).fromNow();
    return output;
  }

}
