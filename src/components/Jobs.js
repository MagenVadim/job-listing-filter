import React from 'react'
import Job from './Job'

export default function Jobs({data, setKeywords}) {
  console.log(data.map((d)=>{return d}))
  
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
