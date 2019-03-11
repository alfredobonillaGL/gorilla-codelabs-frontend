import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../../models/state.interface';

export const getCodelabsState = createFeatureSelector<State>('codelabs');

export const getAllCodelabs = createSelector(
  getCodelabsState,
  codelabsState => codelabsState.codelabs
);

export const getCodelabById = createSelector(
  getCodelabsState,
  (codelabsState, codelabId) =>
    codelabsState.codelabs.find(codelab => codelab._id === codelabId));

