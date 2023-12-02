import React, { useState } from 'react'
import Job from './Job'
import {useEffect} from 'react';
import '../scss/jobs.scss';

export default function Jobs({data, setKeywords, keywords, filteredItems}) {
  
  const [filteredData, setfilteredData] = useState([])

  const modifiedData = ()=>{
    if(filteredItems.length>0){
      const newData=filteredItems
      setfilteredData(newData)
      return
    }

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
    }else{
      setfilteredData(data)
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
