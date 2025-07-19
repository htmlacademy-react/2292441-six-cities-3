import { useEffect } from 'react';
import { ErrorType } from '../../const';
import './error-popup.css';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { removeError } from '../../store/slices/errors-data/errors-data';
import { ServerError } from '../../types/server-error';

type ErrorPopupProps = {
  errors: ServerError[];
};

function ErrorPopup ({errors}: ErrorPopupProps) {
  const dispatch = useAppDispatch();
  const currentError = errors[0];

  useEffect(() => {
    if (!currentError) {
      return;
    }

    if (currentError.errorType as ErrorType === ErrorType.Favorites) {
      const timer = setTimeout(() => {
        dispatch(removeError());
      }, 4000);

      return () => clearTimeout(timer);
    }

    const handleButtonKeydown = () => {
      dispatch(removeError());
    };

    window.addEventListener('keydown', handleButtonKeydown);

    return () => window.removeEventListener('keydown', handleButtonKeydown);
  }, [currentError, dispatch]);

  if (!currentError) {
    return null;
  }

  return (
    <div className="error-popup-overlay">
      <div className="error-popup">
        <p>{`${currentError.errorType}! ${currentError.message}`}</p>
        <p></p>
        <button className="error-popup-close" onClick={() => dispatch(removeError())} onKeyDown={() => dispatch(removeError())}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorPopup;
