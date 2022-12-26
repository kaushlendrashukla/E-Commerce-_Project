import React from 'react'
import { useRef ,useState} from 'react'
import classes from './ContactUs.module.css'

const ContactUs = () => {
   const[isSubmitted, setIsSubmitted]   = useState(false)

    let nameRef=useRef('');
    let emailRef=useRef('');
    let phoneRef=useRef('');

    const submitHandler=async (e)=>{
        e.preventDefault();
       
        const userDetails={
            name: nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value

        }
  
        const response= await fetch('https://react-api-2518b-default-rtdb.firebaseio.com/contactdetails.json'

        , {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(response)
        // const data= await response.json();
      
setIsSubmitted(true)

console.log(isSubmitted)
    }
    
  return (
    <>
   
    <div className={classes.wrapper}>
   { !isSubmitted && <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.title}>Contact us </div>
        <label>Name: </label>
        <input type="text" name="name" ref={nameRef} className={classes.formEntry}/>
        <br/>
        <br/>
        <label>Email Id: </label>
        <input type="email" name="email" ref={emailRef} className={classes.formEntry}/>
        <br/>
        <br/>
        <label>Phone No: </label>
        <input type="number" name="number" ref={phoneRef} className={classes.formEntry}/>
        <br/>
        <br/>
        <button className={classes.submit}>Submit Now</button>
        </form>}
        {isSubmitted && <h2> Thanks for contacting us....!  we will reach you soon!!!!</h2>}
    </div>
    </>
  )
}

export default ContactUs
