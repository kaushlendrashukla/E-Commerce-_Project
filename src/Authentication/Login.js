import { useRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from './AuthContext';

import classes from './Login.module.css';

const Login = () => {

const emailInputRef = useRef();
const passwordInputRef = useRef();
const authCtx = useContext(AuthContext)
const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] =useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault()
const enteredEmail = emailInputRef.current.value;
const enteredPassword = passwordInputRef.current.value;
setIsLoading(true)
let url;
if(isLogin){
  url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw"
  
}
else {
  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw'

  
}
fetch(url,{
    method: 'POST',
    body: JSON.stringify({
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true
    }),
    headers: {
     'Content-Type': "application/json"
    }
  }).then(res => {
    setIsLoading(false)
    if(res.ok) {
return res.json()
    } else {
      res.json().then(data => {
        let errorMessage = "Authentication Error"
        if(data && data.error && data.error.message){
        errorMessage = data.error.message
        console.log(data)
        }
        alert(errorMessage)
        throw new Error(errorMessage)
      })
    }
  }).then(data => {
    authCtx.login(data.idToken);
    history.replace('/')
  }).catch(err => {
    alert(err.message)
  })
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
         { !isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
         {isLoading &&  <p>sending request</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
