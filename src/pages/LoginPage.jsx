import React, { useState } from 'react';

const LoginPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formValid, setFormValid] = useState(false);

  const isFirstNameValid = /^[A-Z][a-z]*$/.test(firstName);
  const isLastNameValid = /^[A-Z][a-z]*$/.test(lastName);
  const isPhoneNumberValid = /^\d+$/.test(phoneNumber);

  const validateForm = () => {
    setFormValid(isFirstNameValid && isLastNameValid && isPhoneNumberValid);
  };

  React.useEffect(() => {
    validateForm();
  }, [firstName, lastName, phoneNumber]);

  return (
    <div className="loginCont">
          <div className='loginPage' style={{ padding: '20px' }}>
      <form>
        <h1>Login Page</h1>
        <div style={{ marginBottom: '10px' }}>
          <label>
            
            <input className='in1' placeholder='Ism'
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                borderColor: isFirstNameValid ? 'green' : 'red',
                borderWidth: '2px',
                borderStyle: 'solid',
                padding: '5px',
                marginLeft: '10px'
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input className='in2' placeholder='Familiya'
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                borderColor: isLastNameValid ? 'green' : 'red',
                borderWidth: '2px',
                borderStyle: 'solid',
                padding: '5px',
                marginLeft: '10px'
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input className='in3'
            placeholder= '   +998 _ _ _  _ _  _ _             '
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{
                borderColor: isPhoneNumberValid ? 'green' : 'red',
                borderWidth: '2px',
                borderStyle: 'solid',
                padding: '5px',
                marginLeft: '10px'
              }}
            />
          </label>
        </div>
        <div className='Login_box'>
          {formValid ? (
            <button className='send_btn'>
              Send
            </button>
          ) : (
            <div style={{ color: 'red' }}><h4>Iltimos, barcha ma`lumotlarni to`g`ri kiriting.</h4></div>
          )}
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
