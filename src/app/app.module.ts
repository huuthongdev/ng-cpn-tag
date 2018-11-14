import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CpnTagComponent } from './cpn-tag/cpn-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    CpnTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
