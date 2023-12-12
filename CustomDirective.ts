import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector : '[appCustomDirective]' //Attribute selector we use in template
})

export class CustomDirective {

    @HostBinding('style.backgroundColor') backgroundColor:string; // this is property decorator

    constructor(private el:ElementRef, private ren:Renderer2){}

    @HostListener('mouseenter') onMouseEnter(){ //method decorator
        this.el.nativeElement.style.backgroundColor = "yellow"; //or

        this.ren.setStyle(this.el.nativeElement, 'background-color', "red");

        this.backgroundColor = 'yellow' // hostbinding
    }
    
    @HostListener('mouseleave') onMouseLeave(){
        this.el.nativeElement.style.backgroundColor = null;
        this.ren.setStyle(this.el.nativeElement, null);
    }
}