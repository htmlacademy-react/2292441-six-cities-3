import { useEffect } from 'react';
import { ErrorType } from '../../const';
import './error-popup.css';
import { useErrorReset } from '../../hooks/use-error-reset';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

type ErrorPopupProps = {
  type: ErrorType;
  error: string;
};

function ErrorPopup ({type, error}: ErrorPopupProps) {
  const action = useErrorReset(type) as ActionCreatorWithoutPayload;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === ErrorType.Favorites) {
      const timer = setTimeout(() => {
        dispatch(action());
      }, 4000);

      return () => clearTimeout(timer);
    }

    const keyDownHandler = () => {
      dispatch(action());
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [action, type, dispatch]);

  return (
    <div className="error-popup-overlay">
      <div className="error-popup">
        <p>{`Error! ${error}`}</p>
        <button className="error-popup-close" onClick={() => dispatch(action())} onKeyDown={() => dispatch(action())}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorPopup;
