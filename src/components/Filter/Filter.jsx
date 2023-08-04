import './Filter.scss';
import Search from '../Search/Search';
import FilterBtn from './FilterBtn/FilterBtn';
import { filterOptions } from '../../utils/constants';

export default function Filter() {
  return (
    <div className='filter'>
      <Search />
      <div>
        <FilterBtn type={'status'} options={filterOptions.status} />
        <FilterBtn type={'species'} options={filterOptions.species} />
        <FilterBtn type={'gender'} options={filterOptions.gender} />
      </div>
    </div>
  );
}
