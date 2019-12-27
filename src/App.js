import React from 'react';
import './App.css';


function formatUser(user){
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: 'Gabriel',
  lastName: 'Ribeiro'
};

const element = (
  <h1>
    Hello, {formatUser(user)}!
  </h1>
);

function App() {
  return (
   element
  );
}

export default App;
