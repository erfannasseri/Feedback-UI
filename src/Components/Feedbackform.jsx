import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button';
function Feedbackform() {
    const [input, setinput] = useState("");
    const [btnDisable, setBtnDisabled] = useState(true);
    const [Massage, setMessage] = useState("");
    
    const change =({ target: { value } }) => { // 👈  get the value
        if (value === '') {
          setBtnDisabled(true)
          setMessage(null)
          
      // prettier-ignore
        } else if (value.trim().length < 10) { // 👈 check for less than 10
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
        setinput(value)
      }
    
  return (
    <Card>      
        <form>
            <h2>How Would you rate your service with us?</h2>
            <div className='input-group'>
                <input onChange={change} type="text" placeholder='Write Review' value={input}/>
                <Button version={'secondary'} isDisabled={btnDisable}>send</Button>               
            </div>
            <p> {Massage} </p>
        </form>
    </Card>
  )
}

export default Feedbackform