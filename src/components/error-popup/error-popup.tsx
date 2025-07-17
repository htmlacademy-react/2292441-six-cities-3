import { useEffect } from 'react';
import { ErrorType } from '../../const';
import './error-popup.css';

type ErrorPopupProps = {
  type?: ErrorType;
  error: string;
  onClose: (() => void);
};

function ErrorPopup ({type, error, onClose}: ErrorPopupProps) {
  useEffect(() => {
    if (type === ErrorType.Favorites) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }

    const keyDownHandler = () => {
      onClose();
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [onClose, type]);

  return (
    <div className="error-popup-overlay">
      <div className="error-popup">
        <p>{`Error! ${error}`}</p>
        <button className="error-popup-close" onClick={onClose} onKeyDown={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorPopup;
