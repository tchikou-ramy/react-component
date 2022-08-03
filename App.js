import React from 'react';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import Adress from './component/profile/Adress';
import FullName from './component/profile/FullName';
function App() {
  return (
    <div className='App'>
      <ProfilePhoto/>
      <Adress/>
      <FullName/>
    </div>
  );
}

export default App;
