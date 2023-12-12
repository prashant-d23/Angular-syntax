import {Component} from '@angular/core';

@Component({
    selector : 'app-sample', 
    templateUrl : './templateFilePath',
    styleUrls : ['./styleFilePath'],
    providers : [] 
})

export class SampleComponent{
   
    @ViewChild(ChildComponentName)propertyName!: ChildComponentName;

    method(){
        this.propertyName.accessAnyChildPropertyORMethod
    }

    //dom elemtns 

    constructor(private ren:Rendere2){}

    @ViewChild('ref') myDiv!:ElementRef;

    changeSomething(){
        const div = this.myDiv.nativeElement;

        this.ren.addClass(div,'hello')
    }



}