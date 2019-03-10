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

  public getCodelabs(): Observable<Array<Codelab>> {
    return this.apiService
      .get<Array<Codelab>>(environment.codelabsEndpoint)
      .pipe(
        map(response => response, catchError(this.handleError)));
  }

  public getCodelab(codelabId: string): Observable<Codelab> {
    return this.apiService.get<Codelab>(`${environment.codelabsEndpoint}/codelab/${codelabId}`).pipe(
      map(response => response, catchError(this.handleError))
    );
  }

  public createCodelab(codelab: Codelab): Observable<Codelab> {
    const {title, author, categories, duration, steps, level, practice} = codelab;
    const newCodeLab = {
      title,
      author,
      categories,
      duration,
      level,
      date: Date.now().toString(),
      practice,
      steps,
    };

    return this.apiService.post(`${environment.codelabsEndpoint}/create`, newCodeLab);
  }

  public updateCodelab(codelab: Codelab): Observable<Codelab> {
    const {title, author, categories, duration, steps, level, practice, _id} = codelab;
    const newCodeLab = {
      title,
      author,
      categories,
      duration,
      level,
      date: Date.now().toString(),
      practice,
      steps,
    };
    return this.apiService.patch(`${environment.codelabsEndpoint}/edit?codelabId=${_id}`, newCodeLab, {_id});
  }

  public deleteCodelab(codelabId: String): Observable<Codelab> {
    return this.apiService.delete(`${environment.codelabsEndpoint}/delete?codelabId=${codelabId}`);
  }
}
