import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of, combineLatest } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { CodelabsService } from '@app/core/codelabs/codelabs.service';
import {
  CodelabsActionTypes,
  GetCodelabsSuccess,
  GetCodelabsFailed,
  DeleteCodelabSuccess,
  DeleteCodelabFailed,
  CreateCodelab,
  CreateCodelabSuccess,
  CreateCodelabFailed,
  UpdateCodelab,
  UpdateCodelabSuccess,
  UpdateCodelabFailed
} from '../actions/codelabs.actions';
import { Router } from '@angular/router';

@Injectable()
export class CodelabsEffects {

  @Effect()
  getCodelabs$ = this.actions$
    .pipe(
      ofType(CodelabsActionTypes.GET_CODELABS),
      mergeMap(() => this.codelabsService.getCodelabs()
        .pipe(
          map(data => {
            return new GetCodelabsSuccess(data);
          }),
          catchError(() => of(new GetCodelabsFailed()))
        ))
    );

    @Effect()
    createCodelab$ = this.actions$
      .pipe(
        ofType(CodelabsActionTypes.CREATE_CODELAB),
        mergeMap((action: any) => this.codelabsService.createCodelab(action.payload)),
        map(() =>  new CreateCodelabSuccess()),
        catchError(() => of(new CreateCodelabFailed()))
      );

    @Effect()
    updateCodelab$ = this.actions$
      .pipe(
        ofType(CodelabsActionTypes.UPDATE_CODELAB),
        mergeMap((action: any) => this.codelabsService.updateCodelab(action.payload)),
        map(() => new UpdateCodelabSuccess()),
        catchError(() => of(new UpdateCodelabFailed()))
      );


    @Effect()
    deleteCodelab$ = this.actions$
      .pipe(
        ofType(CodelabsActionTypes.DELETE_CODELAB),
        mergeMap((action: any) => this.codelabsService.deleteCodelab(action.payload)),
        map(() => new DeleteCodelabSuccess()),
        catchError(() => of(new DeleteCodelabFailed()))
      );


    @Effect({dispatch: false})
      changeSuccess$ = this.actions$
      .pipe(
        ofType(CodelabsActionTypes.UPDATE_CODELAB_SUCCESS, CodelabsActionTypes.CREATE_CODELAB_SUCCESS),
        tap(() => this.router.navigate(['/'])));

  constructor(
    private actions$: Actions,
    private codelabsService: CodelabsService,
    private router: Router
  ) {}
}
