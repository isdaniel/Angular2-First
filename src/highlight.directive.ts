import { Directive, ElementRef, Renderer  } from '@angular/core';


@Directive({
     selector:"[BackGroundColor]" 
})

export class BackGroundColorDirective {
    constructor(private el: ElementRef,private renderer: Renderer) 
    { 
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'green');
    }
}