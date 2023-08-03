import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Search.scss';
import api from '../../api/Api';
import { setSearch } from '../../store/reducers/charactesSlice';

export default function Search() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    api.fliter(inputValue).then((filterd) => {
      dispatch(setSearch(filterd));
    });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className='search'>
      <input
        className='search__input'
        placeholder='search your character'
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className='search__btn'
        type='submit'
        onClick={(evt) => handleSubmit(evt)}>
        find!
      </button>
    </form>
  );
}
