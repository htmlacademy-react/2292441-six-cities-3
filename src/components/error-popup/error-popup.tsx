import { FormEvent } from 'react';
import { ErrorType } from '../../const';

type ErrorPopupProps = {
  type: ErrorType;
  error: string;
  cb?: (evt: FormEvent) => void;
};

function ErrorPopup({type, error, cb}: ErrorPopupProps) {
  return (
    <>
      <p style={{color: 'red', margin: '0'}}>{`Error! ${error}`}</p>
      {type === ErrorType.Login || type === ErrorType.Review ? null :
        <button
          onClick={cb}
          type="button"
        >
        Попробовать ещё раз
        </button>}
    </>
  );
}

export default ErrorPopup;
