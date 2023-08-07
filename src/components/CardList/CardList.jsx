import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './CardList.scss';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import { fetchCharacters } from '../../store/reducers/charactesSlice';
import MoreCards from '../MoreCards/MoreCards';

export default function CardList() {
  const dispatch = useDispatch();
  const charactersObj = useSelector((state) => state.characters);
  const characters = charactersObj.characters.results;
  const selectedCharacter = useSelector(
    (state) => state.characters.selectedCharacter
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleCardClick = () => {
    setIsShowModal(true);
  };

  const handleClose = () => {
    setIsShowModal(false);
  };

  return (
    <section className='card-list'>
      {characters &&
        characters.map((character) => {
          return (
            <Card
              key={character.id}
              character={character}
              onClick={handleCardClick}
            />
          );
        })}
      {characters && <MoreCards />}
      {selectedCharacter && (
        <Modal isOpen={isShowModal} onClose={handleClose} />
      )}
    </section>
  );
}
