import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'child-root',
    templateUrl: './src/app.childcomponent.html'
})

export class ChildComponent  {
    //Input 從父組件傳進來的資訊
    @Input() title:string;
    //output 子組件傳向父組件
    @Output() childToParent:EventEmitter<string> = new EventEmitter();

    constructor()  { }

    ngOnInit(){
         
    }

    sendToParent(){
       this.childToParent.emit('childToParent!!');
    }
}