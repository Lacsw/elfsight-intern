import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Search.scss';
import api from '../../api/Api';
import { setSearch } from '../../store/reducers/charactesSlice';
import { setFilterName } from '../../store/reducers/filterSlice';

export default function Search() {
  const [inputValue, setInputValue] = useState('');
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(filter);
    api
      .fliter(filter)
      .then((filterd) => {
        dispatch(setSearch(filterd));
      })
      .catch((err) => new Error(err.message));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    dispatch(setFilterName(event.target.value));
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
