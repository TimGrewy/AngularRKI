import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RkiLookup } from './rkilookup';
import { RkiLookupExtraInfo } from './rkilookupextrainfo';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RkiService {
  


  constructor(private http: HttpClient) { }

  getRki(cpr: string): Observable<RkiLookup> {
    const url = `http://grewy.dk:3000/rki/${cpr}`;
    return this.http.get<RkiLookup>(url).pipe(
      tap(_ => console.log(`fetched rki id=${cpr}`)),
      catchError(this.handleError<RkiLookup>(`getRki cpr=${cpr}`))
    );
  }
  
  hentPersonMedSkjultAdresse(rkiLookupextrainfo: RkiLookupExtraInfo) {
    const url = `http://grewy.dk:3000/rkifull/${rkiLookupextrainfo.firstName}`;
    return this.http.get<RkiLookup>(url).pipe(
      tap(_ => console.log(`hentPersonMedSkjultAdresse ${url}`)),
      catchError(this.handleError<RkiLookup>(`hentPersonMedSkjultAdresse ${url}`))
    );
  }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
