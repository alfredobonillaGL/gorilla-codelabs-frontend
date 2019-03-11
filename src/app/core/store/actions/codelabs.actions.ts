import { Codelab } from '@app/core/models/codelab.interface';
import { Action } from '@ngrx/store';

export enum CodelabsActionTypes {
  GET_CODELABS = '[Codelabs] Get Codelabs',
  GET_CODELABS_SUCCESS = '[Codelabs] Get Codelabs Success',
  GET_CODELABS_FAILED = '[Codelabs] Get Codelabs Failed',

  CREATE_CODELAB = '[Codelabs] Create Codelab',
  CREATE_CODELAB_SUCCESS = '[Codelabs] Create Codelab Success',
  CREATE_CODELAB_FAILED = '[Codelabs] Create Codelab Failed',

  UPDATE_CODELAB = '[Codelabs] Update Codelab',
  UPDATE_CODELAB_SUCCESS = '[Codelabs] Update Codelab Success',
  UPDATE_CODELAB_FAILED = '[Codelabs] Update Codelab Failed',

  DELETE_CODELAB = '[Codelabs] Delete Codelab',
  DELETE_CODELAB_SUCCESS = '[Codelabs] Delete Codelab Success',
  DELETE_CODELAB_FAILED = '[Codelabs] Delete Codelab Failed',
}


/**
 * Get Actions.
 */
export class GetCodelabs implements Action {
  readonly type = CodelabsActionTypes.GET_CODELABS;
}

export class GetCodelabsSuccess implements Action {
  readonly type = CodelabsActionTypes.GET_CODELABS_SUCCESS;
  constructor(public payload: Array<Codelab>) {}
}

export class GetCodelabsFailed implements Action {
  readonly type = CodelabsActionTypes.GET_CODELABS_FAILED;
}



/**
 * Create Actions.
 */
export class CreateCodelab implements Action {
  readonly type = CodelabsActionTypes.CREATE_CODELAB;
  constructor(public payload: Codelab) {}
}

export class CreateCodelabSuccess implements Action {
  readonly type = CodelabsActionTypes.CREATE_CODELAB_SUCCESS;
}

export class CreateCodelabFailed implements Action {
  readonly type = CodelabsActionTypes.CREATE_CODELAB_FAILED;
}

/**
 * Update Actions.
 */
export class UpdateCodelab implements Action {
  readonly type = CodelabsActionTypes.UPDATE_CODELAB;
  constructor(public payload: Codelab) {}
}

export class UpdateCodelabSuccess implements Action {
  readonly type = CodelabsActionTypes.UPDATE_CODELAB_SUCCESS;
}

export class UpdateCodelabFailed implements Action {
  readonly type = CodelabsActionTypes.UPDATE_CODELAB_FAILED;
}

/**
 * Delete Actions.
 */
export class DeleteCodelab implements Action {
  readonly type = CodelabsActionTypes.DELETE_CODELAB;
  constructor(public payload: string) {}
}

export class DeleteCodelabSuccess implements Action {
  readonly type = CodelabsActionTypes.DELETE_CODELAB_SUCCESS;
}

export class DeleteCodelabFailed implements Action {
  readonly type = CodelabsActionTypes.DELETE_CODELAB_FAILED;
}

export type CodelabsActions =
  GetCodelabs |
  GetCodelabsSuccess |
  GetCodelabsFailed |

  CreateCodelab |
  CreateCodelabSuccess |
  CreateCodelabFailed |

  UpdateCodelab |
  UpdateCodelabSuccess |
  UpdateCodelabFailed |

  DeleteCodelab |
  DeleteCodelabSuccess |
  DeleteCodelabFailed ;
