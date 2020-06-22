import React from 'react';
import './App.css';
import Sidebar from './SideNavBar/sidebar.js'
import QA from './QA/qa.js'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <QA />
            </div>
        );
    }
}

export default App;
