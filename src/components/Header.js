import React from 'react'
import close from './images/icon-remove.svg'

export default function Header({keywords, removeKeyWords, clearAll}) {
  return (
    <div className="header-container">

      <ul>
        {keywords.map((key, id)=>
          {
            return (
              <li key={id}> {key}
              <button onClick={()=>removeKeyWords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
            )            
          })}

        <a href="#" onClick={()=> clearAll()}>Clear</a>
      </ul>

    </div>
  )
}
