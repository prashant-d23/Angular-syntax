// imported the Pipe decorator and the pipetransform interface that contains transofrm method 
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'custom' //pipe name used in template
})

export class CustomPipe implements PipeTransform{
    transform(value:any, args?:any):any{
        return value;
    }
}
