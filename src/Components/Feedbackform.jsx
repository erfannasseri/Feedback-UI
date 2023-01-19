import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function Feedbackform({submit}) {
    const [text, setinput] = useState("");
    const [btnDisable, setBtnDisabled] = useState(true);
    const [Massage, setMessage] = useState("");
    const [rating, setrateing] = useState(5);
    
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
    
      const handleFeedback = (e)=>{
        e.preventDefault()
        const newFeedback ={ 
          text,
          rating
        };
        submit(newFeedback)
        setinput('')
      }
  return (
    <Card>      
        <form onSubmit={handleFeedback}>
            <h2>How Would you rate your service with us?</h2>
            <RatingSelect select={(rateing)=>setrateing(rateing)}/>
            <div className='input-group'>
                <input onChange={change} type="text" placeholder='Write Review' value={text}/>
                <Button type={'submit'} version={'secondary'} isDisabled={btnDisable}>send</Button>               
            </div>
            <p> {Massage} </p>
        </form>
        
    </Card>
  )
}

export default Feedbackform