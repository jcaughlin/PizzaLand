import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PizzaMakerComponent } from './pizza-maker/pizza-maker.component';
import { PizzaMakerService } from './pizza-maker.service';



@NgModule({
  declarations: [
    AppComponent,
    PizzaMakerComponent,


  ],
  imports: [
 		NgbModule.forRoot()
 		, BrowserModule
 		, FormsModule
  ],
  providers: [
  		PizzaMakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
