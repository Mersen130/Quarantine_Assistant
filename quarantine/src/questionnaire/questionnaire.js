import React from 'react';
import "./questionnaire.css"
import "./question.js"
import Question from './question.js';

class Questionnaire extends React.Component {
    state = {currQ: 0, selected: [0, 0, 0, 0, 0]}

    render() {
        return (
            <div class="jumbotron jumbotronQuest jumbotron-fluid">
                <div class="container containerQuest">
                    <Question currQ={this.state.currQ} handleNext={this.nextQ} handleLast={this.lastQ} handleCheck={this.check}/>
                </div>
            </div>
        );
    }

    nextQ = (e) => {
        e.preventDefault();
        if (this.state.selected[this.state.currQ] == 0){
            alert("please select one answer");
            return;
        }
        if(this.state.currQ == 4){
            return;
        }
        this.setState({currQ: ++this.state.currQ});
        console.log(this.state.currQ);
    }

    lastQ = (e) => {
        e.preventDefault();
        this.setState({currQ: --this.state.currQ});
    }

    check = (e) => {
        e.preventDefault();
        this.state.selected[this.state.currQ] = 1;
    }
}

export default Questionnaire;








