import { Component, OnInit } from '@angular/core';
import { RkiLookup } from '../rkilookup';
import { RkiService } from '../rki.service';
import { ActivatedRoute } from "@angular/router";
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'pm-rki-result',
  template: `
  <div *ngIf="noCpr">
    <p>Der skal angives et cprnummer for at søge</p>
    Prøv med disse:<br/>
    <a href="http://grewy.dk/rki/?cpr=0402831871">grewy.dk/rki/?cpr=0402831871</a><br/>
    <a href="http://grewy.dk/rki/?cpr=2510881020">grewy.dk/rki/?cpr=2510881020</a><br/>
  </div>
  <div *ngIf="!rkiLookup.extraInfoNeeded">
    Rki-result:<br/>
    CPR: {{rkiLookup.cprNr}}<br/>
    Registreret i RKI: {{rkiLookup.registreredInRki}}<br/>
  </div>
  <pm-rki-extra-info *ngIf="rkiLookup && rkiLookup.extraInfoNeeded"></pm-rki-extra-info>
  `,
  styleUrls: ['./rki-result.component.css']
})
export class RkiResultComponent implements OnInit {
  rkiLookup: RkiLookup;
  noCpr: Boolean;
  constructor(private rkiservice: RkiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    var cpr = this.getParamValueQueryString('cpr');
    if (!cpr || cpr == "") {
      this.noCpr = true;
      return;
    }

    //alert('cpr: ' + this.route.snapshot.queryParamMap);
    this.rkiservice.getRki(cpr)
      .subscribe(rki => this.rkiLookup = rki)
  }

  /**
   * Jeg kunne ikke finde ud af at hente query param fra angylar, så nu gør jeg det via window.location
   */
  getParamValueQueryString( paramName: string): string {
    const url = window.location.href;
    let paramValue;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      paramValue = httpParams.get(paramName);
    }
    return paramValue;
  }

}
