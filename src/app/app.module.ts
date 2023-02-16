import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooldalComponent } from './fooldal/fooldal.component';

import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';
import { ToysComponent } from './toys/toys.component';
import { NewPlushieComponent } from './new-plushie/new-plushie.component';
import { PlushieComponent } from './plushie/plushie.component';
import { InventoryComponent } from './inventory/inventory.component'

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    HistoryComponent,
    ToysComponent,
    NewPlushieComponent,
    PlushieComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
