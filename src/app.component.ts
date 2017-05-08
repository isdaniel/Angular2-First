import { Component, Injectable } from '@angular/core';

import { LoggerService } from './logger.service';



@Component({
  selector: 'my-app-root',
  
  templateUrl: './src/app.component.html'
})

export class AppComponent {
  private greeting: string;
  private IsShow:boolean;
  private logger:LoggerService;
  private parentToChild:string;
  private msgFromChild:string;

	constructor() {
    this.logger=new LoggerService();
    this.parentToChild="Hello parentToChild";
  }

  ngOnInit() {
    this.logger.test('NG2警告開始!!');
    this.greeting = 'HelloWorld';
  }

  receive(msg: string) {
    this.msgFromChild = msg;
  }

}

