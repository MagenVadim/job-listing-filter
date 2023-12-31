import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import '../scss/job.scss';

export default function Job({data, setKeywords}) {

  let keywords = [data.role, data.level, ...data.languages, ... data.tools]
  
  const [icon, setIcon] = useState('');
 
  const importSvgs = ()=>{
    const logoSvg = import(`${data.logo}`).then(d=>{
      setIcon(d.default)
    })
  }

useEffect(()=>{
  importSvgs()
}, [data.logo])


  return (
    <div className={data.featured ? "job-container job-container--borderLeft":  "job-container"}>
      <div className="logo">
        <img src={icon} alt="" />
      </div>

      <div className="part1">

        <div className="company">
          <span className="companyName">{data.company}</span>
          {data.new && <span className="new">new!</span>}
          {data.featured && <span className="featured">featured</span>}
        </div>

        <div className="position">{data.position}</div>
        <div className="details">
          <span>{data.postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{data.contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{data.location}</span>
        </div>

      </div>

      <div className="part2">
        {
          keywords.map((key, id)=>(
            <span onClick={()=> setKeywords(key)} key={id}>{key}</span>            
          ))
        }
      </div>
    </div>
    
  )
}
