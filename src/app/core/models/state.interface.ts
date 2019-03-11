import { Codelab } from './codelab.interface';

export interface State {
  codelabs: Array<Codelab>;
  loading: boolean;
  error: boolean;
}
