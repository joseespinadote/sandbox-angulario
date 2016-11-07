import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AlgoDetalle } from './algo-detalle.component';
@NgModule({
  imports:      [ BrowserModule,
                FormsModule ],
  declarations: [ AppComponent,
                AlgoDetalle ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }