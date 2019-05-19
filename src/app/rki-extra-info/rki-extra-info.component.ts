import { Component, OnInit } from '@angular/core';
import { RkiLookupExtraInfo } from '../rkilookupextrainfo';
import { RkiService } from '../rki.service';
import { RkiLookup } from '../rkilookup';

@Component({
  selector: 'pm-rki-extra-info',
  template: `<p>Indtast ekstra information:</p>
  fullName: <input [(ngModel)]="rkiLookupextrainfo.firstName"/><br/>
  lastName: <input [(ngModel)]="rkiLookupextrainfo.lastName"/><br/>
  street: <input [(ngModel)]="rkiLookupextrainfo.street"/><br/>
  houseNumber: <input [(ngModel)]="rkiLookupextrainfo.houseNumber"/><br/>
  postalCode: <input [(ngModel)]="rkiLookupextrainfo.postalCode"/><br/>
  city: <input [(ngModel)]="rkiLookupextrainfo.city"/><br/>
  <button (click)="hentRki()">hent rki</button><br/><br/>
  <div *ngIf="rkiLookup">Registreret i RKI: {{rkiLookup.registreredInRki}}</div><br/>
  `,
  styleUrls: ['./rki-extra-info.component.css']
})
export class RkiExtraInfoComponent implements OnInit {
  rkiLookupextrainfo: RkiLookupExtraInfo = new RkiLookupExtraInfo();
  rkiLookup: RkiLookup;

  constructor(private rkiservice: RkiService) { }

  ngOnInit() {
  }

  hentRki(): void {
    this.rkiservice.hentPersonMedSkjultAdresse(this.rkiLookupextrainfo)
      .subscribe(rki => this.rkiLookup = rki);
  }

}
