import { Component, OnInit } from '@angular/core';
import { RkiLookup } from '../rkilookup';
import { RkiService } from '../rki.service';
import { ActivatedRoute } from "@angular/router";
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'pm-rki-result',
  template: `<p *ngIf="noCpr">Der skal angives et cprnummer for at søge<p>
  <p *ngIf="!rkiLookup.extraInfoNeeded">Rki-result:</p>
  <div *ngIf="!rkiLookup.extraInfoNeeded">
  CPR: {{rkiLookup.cprNr}}<br/>
  Registreret i RKI: {{rkiLookup.registreredInRki}}<br/>
  </div>
  <pm-rki-extra-info *ngIf="rkiLookup.extraInfoNeeded"></pm-rki-extra-info>
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
