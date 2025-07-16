import { ErrorType } from '../../const';
import { LoginErrorData } from '../../types/login-error-data';

type ErrorPopupProps = {
  type: ErrorType;
  error: LoginErrorData;
  cb?: () => void;
};

function ErrorPopup({type, error, cb}: ErrorPopupProps): JSX.Element {
  return (
    <>
      <p style={{color: 'red', margin: '0'}}>{`Error! ${error.message}`}</p>
      {type === ErrorType.Login ? null :
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
