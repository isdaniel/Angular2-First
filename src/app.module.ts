import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackGroundColorDirective } from './highlight.directive'
import { LoggerService } from './logger.service'
import { ChildComponent } from './app.childcomponent';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,BackGroundColorDirective,ChildComponent],
  providers: [LoggerService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
