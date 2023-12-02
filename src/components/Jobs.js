import React, { useState } from 'react'
import Job from './Job'
import {useEffect} from 'react';
import '../scss/jobs.scss';

export default function Jobs({data, setKeywords, keywords, filteredItems}) {
  
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
          )})     
      })
      console.log(newData)
      setfilteredData(newData)
    }
    else if(filteredItems.length>0 && filteredItems.length<data.length){
      const newData=filteredItems
      setfilteredData(newData)
      console.log(filteredItems.length)
      return
    }
    else{
      setfilteredData(data)
      console.log("else")
    }
    
  }
  
  useEffect(() => {
    modifiedData()
  }, [keywords, filteredItems])
  

  return (    
    <div className="jobs">
      {filteredData.map((d)=>{
        return(
          <Job key={d.id} data={d} setKeywords={setKeywords}/>
        )        
      })}
    </div>
  )
}
