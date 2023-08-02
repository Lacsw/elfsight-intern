import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './CardList.scss';
import Card from '../Card/Card';
import { fetchCharacters } from '../../store/reducers/charactesSlice';
import MoreCards from '../MoreCards/MoreCards';

export default function CardList() {
  const dispatch = useDispatch();
  const charactersObj = useSelector((state) => state.characters);
  const characters = charactersObj.characters.results;

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <section className='card-list'>
      {characters &&
        characters.map((character) => {
          return <Card key={character.id} character={character} />;
        })}
      {characters && <MoreCards />}
    </section>
  );
}
