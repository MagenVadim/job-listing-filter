import React, { useState } from 'react'
import Job from './Job'
import {useEffect} from 'react';
import '../scss/jobs.scss';

export default function Jobs({data, setKeywords, keywords}) {
  
  const [filteredData, setfilteredData] = useState([])

  // const SearchFunc = ()=>{
  //   if(keywords.length>0){
  //     const newData = filteredData.filter((d)=> {
  //       return d.position.toLocalLowerCase().includes(keywords)
  //     })
  //     setfilteredData(newData)
  //   } else {
  //     setfilteredData(data)
  //   }
  // }   

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

      setfilteredData(newData)
    }else{
      setfilteredData(data)
    }
  }
  
  useEffect(() => {
    modifiedData()
    // SearchFunc()
  }, [keywords])
  

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
