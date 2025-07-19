import { isAxiosError } from 'axios';
import { ServerError } from '../../types/server-error';
import { DetailedError } from '../../types/detailed-error';
import { ErrorType } from '../../const';

export const getErrorData = (error: unknown, type: ErrorType): ServerError => {
  if (isAxiosError(error)) {
    if (error.response) {
      if ('details' in error.response.data && type !== ErrorType.Favorites) {
        const detailedData = error.response.data as DetailedError;
        return {errorType: type, message: detailedData.details[0].messages.join(' ')};
      }
      const data = error.response.data as ServerError;
      return {errorType: type, message: data.message};
    } else {
      return {errorType: ErrorType.Server, message: 'Server is unavailable'};
    }
  }

  return {errorType: ErrorType.Unknown, message: 'Something went wrong.'};
};
