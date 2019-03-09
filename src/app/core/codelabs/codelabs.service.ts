import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Codelab } from '../models/codelab.interface';
import { environment } from '@env/environment';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CodelabsService {

  constructor(private apiService: ApiService) { }

  private handleError(error: any): Observable<any> {
    return throwError(console.error('Some error occured', error));
  }

  getCodelabs(): Observable<Array<Codelab>> {
    return this.apiService
      .get<Array<Codelab>>(environment.codelabsEndpoint)
      .pipe(
        map(response => response, catchError(this.handleError)));
  }
}
