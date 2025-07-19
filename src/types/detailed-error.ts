import { ErrorDetails } from './error-details';
import { ServerError } from './server-error';

export type DetailedError = {
  details: ErrorDetails[];
} & ServerError;
