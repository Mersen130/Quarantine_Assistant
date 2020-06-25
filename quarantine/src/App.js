import React from 'react';
import './App.css';
import Sidebar from './SideNavBar/sidebar.js';
import QA from './QA/qa.js';
import Questionnaire from './questionnaire/questionnaire.js';
import Question from './questionnaire/question';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Questionnaire />
            </div>
        );
    }
}

export default App;
