import React from 'react'

export default function Job({data}) {
  // console.log(data.company)

  // const prop = {
  //   company,
  //   contract,
  //   featured,
  //   id,
  //   languages,
  //   level,
  //   location,
  //   logo,
  //   position,
  //   postedAt,
  //   role,
  //   tools
  // }


  return (

    <div className="job-container">{data.company}
      <div className="logo">
        {/* <img src={logo} alt="" /> */}
      </div>

      <div className="part1">
        <div className="company">
          <div className="companyName">{data.company}</div>
          {data.new && <span className="new">!new</span>}
          {data.featured && <span className="featured">featured</span>}
        </div>
      </div>

    </div>
    
  )
}
