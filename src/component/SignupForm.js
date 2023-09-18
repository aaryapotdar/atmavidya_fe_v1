import React, { useState } from 'react';
import './SignupForm.css'; // Import your CSS file



function SignupForm () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    // Submit the form data to your server or perform further actions
  };

  return (

<div className="container">
  <div className='img-container'>
  <img src='./image/image-3.jpeg' className='swami-image' alt='' height={500} width={300}></img>
  </div>
   
<div className='signup-container'>
<div className='row-first'>
    <img src='./image/logo1.png' alt='' height={100} width={100}></img>
    <h2>Sign Up</h2>
    <img src='./image/logo2.png' alt='' height={100} width={100}></img>
</div>
              
              
<div className="row-second">
  <div className="block-name">
    <button>New Devotee</button>
  </div>
  <div className="block-name">
    <button>Registerd Devotee</button>
  </div>
</div>
      <form onSubmit={handleSubmit}>
         
            <div className="row-three">
                        <div className='field'>
                        <label htmlFor="firstName">First Name<span>*</span></label>
                        <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required />
                        </div>
                     
                  
                <div className="field">
                      <label htmlFor="lastName">Last Name<span>*</span></label>
                      <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required />
                         
                  </div>
            </div>

                  <div className="row-three">
                    <div className='field'>
                      <label htmlFor="email">Email</label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required />
                          </div>
                 
                  <div className="field">
                      <label htmlFor="mobileNumber">Mobile Number<span>*</span></label>
                      <input
                          type="tel"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required />

                   </div>
                  </div>


                <div className='row-three'>
                  <div className="field">
                      <label htmlFor="password">Password<span class="req-field">*</span></label>
                      <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required /> 
                  </div>
                  <div className="field">
                      <label htmlFor="confirmPassword">Confirm Password<span>*</span></label>
                      <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required />
                  </div>
                </div>
                <div className='button-container'>
                  <button  >Sign Up</button>
                </div>
                  
              </form>
             
             
</div>
</div>

  );
};


export default SignupForm;
