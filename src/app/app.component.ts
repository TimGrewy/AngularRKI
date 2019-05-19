import { Component } from '@angular/core';
import { RkiLookup } from './rkilookup';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cprNr = '0402831871';
  besked = this.cprNr + ' er ikke i RKI';
  rkiLookup = new RkiLookup();


}
