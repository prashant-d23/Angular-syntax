import {ngModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component'; //root component
//import other modules,components,services 

@ngModule({
    declaration : [
        AppComponent,
        CustomPipe,
        CustomeDirectives,
    ],
    imports : [
        BrowserModule,
        // other modules that needed in this module 
    ],
    export : [
        // export components,directives,pipes that we want to use in another module
    ],
    providers : [
        // register all services here 
    ],
    bootstrap : [AppComponent]
})

export class AppModule {}

