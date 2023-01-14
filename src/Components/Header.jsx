import React from 'react'
import '../App.css';
function Header(props) {
  return (
    <div className='App-header' >
        <h3>{props.text}</h3>
    </div>
  )
}

Header.defaultProps = {
    text:'FEEDBACK UI'
}

export default Header