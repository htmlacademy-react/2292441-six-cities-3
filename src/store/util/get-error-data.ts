import { isAxiosError } from 'axios';
import { ServerError } from '../../types/server-error';
import { DetailedError } from '../../types/detailed-error';

export const getErrorData = (error: unknown): DetailedError | ServerError => {
  if (isAxiosError(error)) {
    if (error.response) {
      return error.response.data as DetailedError | ServerError;
    } else {
      return {errorType: 'SERVER_ERROR', message: 'Server is unavailable'};
    }
  }

  return {errorType: 'UNKNOWN_ERROR', message: 'Something went wrong.'};
};
