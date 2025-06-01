import React from 'react';
import Profile from './Module 3/Introduction to ReactJS/Ques_5';

function App() {
  return (
    <div>
      <h1>Login Status</h1>
       <LoginMessage isLoggedIn={true} />
       <LoginMessage isLoggedIn={false} />
    </div>
  );
}

export default App;