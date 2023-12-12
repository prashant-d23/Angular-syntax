import {Component} from '@angular/core';

// this is a decorator which contains an object with some properties decorating a class
@Component({
    selector : 'app-sample', //component selector used in HTML
    template : '<h2> this is inline html </h2>' //or
    templateUrl : './templateFilePath',
    styleUrls : ['./styleFilePath'],
    providers : [] // component level services
})

export class SampleComponent{
    name:string = "Prashant"
}