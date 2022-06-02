import React, {useState} from 'react';
import './style.css'

function RegistrationForm() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [MobileNumber,setMobileNumber] = useState(null);
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "MobileNumber"){
            setMobileNumber(value);
        }

    }
    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword,MobileNumber);
    }

    return(
       
      <div className="form">
          <h1>Register</h1>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" onChange = {(e) => handleInputChange(e)}/>
              </div> 
              <div className="MobileNumber">
                  <label className="MobileNumber" for="MobileNumber">Mobile Number </label>
                  <input  type="text" name="" id="MobileNumber" className="form__input" placeholder="MobileNumber" onChange = {(e) => handleInputChange(e)}/>
              </div>

          </div>
          <div className="footer">
              <button type="submit" className="btn" onClick={()=>handleSubmit()}>Register</button>
          </div>
      </div>      
    )       
    }
   

export default RegistrationForm;
