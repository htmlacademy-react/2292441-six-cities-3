import { useEffect } from 'react';
import { ErrorType } from '../../const';
import './error-popup.css';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectErrors } from '../../store/slices/errors-data/selectors';
import { removeError } from '../../store/slices/errors-data/errors-data';

function ErrorPopup () {
  const dispatch = useAppDispatch();
  const errors = useAppSelector(SelectErrors);
  const {errorType, message} = errors[0];

  useEffect(() => {
    if (errorType as ErrorType === ErrorType.Favorites) {
      const timer = setTimeout(() => {
        dispatch(removeError());
      }, 4000);

      return () => clearTimeout(timer);
    }

    const keyDownHandler = () => {
      dispatch(removeError());
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [errorType, dispatch]);

  return (
    <div className="error-popup-overlay">
      <div className="error-popup">
        <p>{`${errorType}! ${message}`}</p>
        <button className="error-popup-close" onClick={() => dispatch(removeError())} onKeyDown={() => dispatch(removeError())}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorPopup;
