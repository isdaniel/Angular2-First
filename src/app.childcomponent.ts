import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'child-root',
    templateUrl: './src/app.childcomponent.html'
})

export class ChildComponent  {
    @Input() title:string;
    @Output() childToParent:EventEmitter<string> = new EventEmitter();

    constructor()  { }

    ngOnInit(){
         
    }

    sendToParent(){
       this.childToParent.emit('childToParent!!');
    }
}