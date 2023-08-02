import React from 'react';

import './Card.scss';

export default function Card({ character }) {
  return (
    <article className='card'>
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
          <p className='card__gender'>
            <b>Gender: </b>
            {character.gender}
          </p>
        </div>
      </div>
    </article>
  );
}
