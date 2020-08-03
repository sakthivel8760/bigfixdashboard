import { Injectable } from '@angular/core'
import { throwError as observableThrowError, Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import get from 'lodash/get';



@Injectable({
    providedIn: 'root'
})
export class DashboardService {
  private http: HttpClient
  constructor (http: HttpClient) {
    this.http = http
  }

  getDashboard$ (): Observable<{}> {
    return of({})
  }

  getContentWiseList (): Observable<any> {
    return this.httpGet('http://168.61.44.82:8080/api/v1/min_fixlets/0/25/0/0').pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  httpGet(path: string, module = '0'): Observable<any> {
    return this.http.get( path)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response): any {
    return observableThrowError(get(error, 'error') || {});
  }
}
