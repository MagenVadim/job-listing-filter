import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';

export default function Job({data}) {
  // console.log(data.company)

  let keywords = [data.role, data.level, ...data.languages, ... data.tools]
  
  const [icon, setIcon] = useState('');
 
  const importSvgs = ()=>{
    const logoSvg = import(`${data.logo}`).then(d=>{
      console.log(d);
      setIcon(d.default)
    })
  }

useEffect(()=>{
  importSvgs()
}, [data.logo])



  return (
    <div className="job-container">
      <div className="logo">
        <img src={icon} alt="" />
      </div>

      <div className="part1">

        <div className="company">
          <div className="companyName">{data.company}</div>
          {data.new && <span className="new">!new</span>}
          {data.featured && <span className="featured">featured</span>}
        </div>

        <div className="position">{data.position}</div>
        <div className="details">
          <span>{data.postedAt}</span>
          <span>{data.contract}</span>
          <span>{data.location}</span>
        </div>

      </div>

      <div className="part2">
        {
          keywords.map((key, id)=>(
            <button key={id}>{key}</button>
          ))
        }
      </div>
    </div>
    
  )
}
