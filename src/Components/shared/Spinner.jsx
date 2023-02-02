import spiner from '../assets/spinner.gif';

import React from 'react'

function Spinner() {
  return (
    <img src={spiner} alt="Loading..." style={{margin:"auto" , width:"100px",display:"block"}} />
  )
}

export default Spinner