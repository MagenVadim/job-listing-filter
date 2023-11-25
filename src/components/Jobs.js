import React, { useState } from 'react'
import Job from './Job'
import {useEffect} from 'react';

export default function Jobs({data, setKeywords, keywords}) {
  
  const [filteredData, setfilteredData] = useState([])

  const modifiedData = ()=>{
    if(keywords.length>0){

      const newData = filteredData.filter((d)=>{
        return keywords.every((key)=>{
          return(
            d.role == key || 
            d.level == key ||
            d.languages.includes(key) || 
            d.tools.includes(key)
          )
        }

        )
        



      })

      setfilteredData(newData)
    }else{
      setfilteredData(data)
    }
  }

  
  useEffect(() => {
    modifiedData()
  }, [keywords])
  


  return (
    <div className="jobs">
      {filteredData.map((d)=>{
        return(
          <Job data={d} setKeywords={setKeywords}/>
        )        
      })}
    </div>
  )
}
