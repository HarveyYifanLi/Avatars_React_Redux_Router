import React from 'react';
import './App.css';
import AvatarList from './AvatarList';
import {Link, Route, Redirect} from 'react-router-dom';

function App() {
  let linkStyle = {margin: "0 20px"};
  
  return (
    <div className="App">
        <h2> Avatar Collections! </h2>
        <p>
          <Link to='/avatars' style={linkStyle}>View Avatars</Link>
          <Link to='/avatars/new' style={linkStyle}>Add Avatar</Link>
        </p>
        <Route path='/avatars' component={AvatarList} />
        <Route exact path='/' render={()=><Redirect to='/avatars'/>}/>
    </div>
  );
}

export default App;
