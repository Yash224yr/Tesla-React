import React from 'react'

function Section(props) {
  return (
    <div className='section' style={{backgroundImage : `url("images/${props.backimg}")`}}>
      <div className='model'>
        <h1>{props.Name}</h1>
        <p>{props.desc}</p>
      </div>
      <div className='buttons'>
        <a href=''>{props.leftbtn}</a>
        {props.rightbtn && <a>{props.rightbtn}</a>}
        <div className='downarrow'>
          { props.ico && < img src='images/down-arrow.svg' className='arrow'/>}
        </div>
      </div>
    </div>
  )
}

export default Section