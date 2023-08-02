import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './MoreCards.scss';
import { fetchCharacters } from '../../store/reducers/charactesSlice';

const MoreCards = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const charInfo = characters.characters.info;
  const [pageNum, setPageNum] = useState(1|| null);

  const handleNextBtnClick = () => {
    dispatch(fetchCharacters(charInfo.next));
    setPageNum(pageNum + 1);
  };

  const handlePrevBtnClick = () => {
    dispatch(fetchCharacters(charInfo.prev));
    setPageNum(pageNum - 1);
  };

  return (
    <section className='more-cards'>
      <p className='more-cards__counter'>
        {pageNum} / {42}
      </p>
      {charInfo.prev && (
        <button className='more-cards__btn' onClick={handlePrevBtnClick}>
          Prev
        </button>
      )}
      {charInfo.next && (
        <button className='more-cards__btn' onClick={handleNextBtnClick}>
          Next
        </button>
      )}
    </section>
  );
};

export default MoreCards;
