import React, { useRef } from 'react';

import './Card.scss';
import { useDispatch } from 'react-redux';
import { setSelectedCharacter } from '../../store/reducers/charactesSlice';

export default function Card({ character, onClick }) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(setSelectedCharacter(character));
    onClick();
  };

  const rotateToMouse = (e) => {
    const bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 3}deg
      )
    `;
  };

  const removeListener = (e) => {
    inputRef.current.style.transform = '';
    inputRef.current.style.background = '';
  };

  return (
    <article
      className='card'
      onClick={handleCardClick}
      ref={inputRef}
      onMouseLeave={removeListener}
      onMouseMove={rotateToMouse}>
      <img
        src={character.image}
        alt={`${character.name}`}
        className='card__image'
      />

      <div className='card__info'>
        <div>
          <h2 className='card__name'>{character.name}</h2>
          <span className='card__status'>
            <span
              className={`card__status-icon ${
                character.status === 'Alive'
                  ? 'card__status-icon_alive'
                  : 'card__status-icon_dead'
              }`}
            />
            {`${character.status} - ${character.species}`}
          </span>
        </div>
        <div>
          <p className='card__tooltip'>
            <b>Gender: </b>
            {character.gender}
          </p>
        </div>
      </div>
    </article>
  );
}
