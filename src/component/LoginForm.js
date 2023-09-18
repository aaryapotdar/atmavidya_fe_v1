import React from 'react'
import { Link } from 'react-router-dom'



function LoginForm() {
  return (


<div className='container'>


        <div class="logo-image">
        <img src='./image/logo2.png' alt='' width={100} height={110} ></img>
        </div>
        <p><h4>Pujyasri Omkarananda Mahaswamigal’s
            SRI SWAMI CHIDBHAVANANDA  ASHRAMAM
        Vedapuri - Theni</h4>
        </p>

      <div className='form-container'>
        <div className='login-form'>
            <label htmlFor='emailOrMobile'>Email ID or mobile number <span class="req-field">*</span>  </label>
            <input
                          type="text"
                          id="emailOrMobile"
                          name="emailOrMobile"
                          required />

           <label htmlFor='password'>Password <span class="req-field">*</span></label>
           <input 
                            type="password" 
                            id="password"
                            name="password" required/>

           <label htmlFor="password"><u>Forgot/Change Password</u></label>
           <button type="submit">Log In</button>
           
           <label htmlFor="signup">You are new Devotee?  <Link to="/SignupForm" >Sign Up</Link> </label>
          
        </div>
      </div>



      <div class="vertical-container"></div>
      <div class="bottom-container">
      <h4>or Log In with</h4>
     
            <img width="40" height="40" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
     
        <a href="https://www.facebook.com">
            <img width="40" height="40" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
        </a>
      </div>
       
      
     



</div>
  )
}

export default LoginForm