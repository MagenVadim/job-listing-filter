import React from 'react'
import '../scss/search.scss';

export default function Search({query, handleInputChange}) {
  return (
    <div className="search-container">
      <ul className="search-wrap">

        <input type="text"
          onChange={handleInputChange}
          value={query}/>

      </ul>
    </div>
  )
}
