import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { RkiResultComponent } from './rki-result/rki-result.component';
import { RkiExtraInfoComponent } from './rki-extra-info/rki-extra-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RkiResultComponent,
    RkiExtraInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit { 

}
