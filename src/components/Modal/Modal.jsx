import React, { useEffect } from 'react';

import './Modal.scss';
import { useSelector } from 'react-redux';

const Modal = ({ isOpen, onClose }) => {
  const selectedCharacter = useSelector(
    (state) => state.characters.selectedCharacter
  );

  useEffect(() => {
    if (isOpen) {
      const closeByEsc = (evt) => {
        if (evt.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', closeByEsc);
      return () => document.removeEventListener('keydown', closeByEsc);
    }
  }, [isOpen, onClose]);

  const closeByOver = (evt) => {
    if (evt.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className={`modal ${isOpen && 'modal_opened'}`} onClick={closeByOver}>
      <div className='modal__container'>
        <button
          onClick={onClose}
          className='modal__close-btn'
          type='button'
          aria-label='кнопка закрытия попапа'>
          &times;
        </button>
        <img
          src={selectedCharacter.image}
          alt={`${selectedCharacter.name}`}
          className='card__image'
        />
        <div className='card__info'>
          <div>
            <h2 className='card__name'>{selectedCharacter.name}</h2>
            <span className='card__status'>
              <span
                className={`card__status-icon ${
                  selectedCharacter.status === 'Alive'
                    ? 'card__status-icon_alive'
                    : 'card__status-icon_dead'
                }`}
              />
              {`${selectedCharacter.status} - ${selectedCharacter.species}`}
            </span>
          </div>
          <div>
            <p className='card__tooltip'>
              <b>Gender: </b>
              {selectedCharacter.gender}
            </p>
            <p className='card__tooltip'>
              <b>Location: </b>
              {selectedCharacter.location.name}
            </p>
            <p className='card__tooltip'>
              <b>Type: </b>
              {selectedCharacter.type || 'unknown'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
