import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';

import './FilterBtn.scss';
import {
  setFilterGender,
  setFilterSpecies,
  setFilterStatus,
} from '../../../store/reducers/filterSlice';
import api from '../../../api/Api';
import { setSearch } from '../../../store/reducers/charactesSlice';

export default function FilterBtn({ type, options }) {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleSelect = useCallback(
    (evt) => {
      console.log(type);
      switch (type) {
        case 'status':
          dispatch(setFilterStatus(evt.target.value));
          break;
        case 'species':
          dispatch(setFilterSpecies(evt.target.value));
          break;
        case 'gender':
          dispatch(setFilterGender(evt.target.value));
          break;
        default:
          return null;
      }
    },
    [dispatch, type]
  );

  useEffect(() => {
    api.fliter(filter).then((filterd) => {
      dispatch(setSearch(filterd));
    });
  }, [dispatch, filter]);

  return (
    <select className='filterBtn' onChange={handleSelect}>
      <option value=''>{type}</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={filter[option]}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
