import React from 'react'

export default function Search({query, handleInputChange}) {
  return (
    <div className="header-container">
      <ul>

        <input type="text"
          onChange={handleInputChange}
          value={query}/>

      </ul>
    </div>
  )
}
