import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './SideNavBar/sidebar.js'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Sidebar/>
      </div>
    );
  }
}

export default App;
