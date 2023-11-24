import React from 'react'
import Job from './Job'

export default function Jobs({data, setKeywords}) {
  
  return (
    <div className="jobs">
      {data.map((d)=>{
        return(
          <Job data={d} setKeywords={setKeywords}/>
        )        
      })}
    </div>
  )
}
