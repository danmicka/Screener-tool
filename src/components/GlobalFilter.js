import React from 'react';
import './filter.css';
import SearchIcon from '@material-ui/icons/Search';
function GlobalFilter({ filter, setFilter }) {
  return (
    <div className='top_serch_container'>
      <div className='search_container'>
        <div className='heading'>Signals</div>
        <div className="search_input">
          <SearchIcon className="search_icon" />
          <input placeholder='Search your pair' className='search' value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default GlobalFilter;
