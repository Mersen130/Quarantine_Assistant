import React from 'react';
import '../components.css'
import "./question.js"
import Question from './question.js';

class Questionnaire extends React.Component {
    state = { currQ: 0, selected: [-1, -1, -1, -1, -1] }

    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Well done!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.getTotal()}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => window.location.href = "/signin"}>Exit</button>
                                <button type="button" className="btn btn-primary" onClick={() => window.location.href = "/signup"}>Continue to signup...</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jumbotron jumbotronQuest jumbotron-fluid">
                    <div className="container containerQuest">
                        <Question currQ={this.state.currQ} handleNext={this.nextQ} handleLast={this.lastQ} handleCheck={this.check} />
                    </div>
                </div>
            </div>
        );
    }

    nextQ = (e) => {
        e.preventDefault();
        if (this.state.selected[this.state.currQ] === -1) {
            alert("please select one answer");
            return;
        }
        const temp = this.state.currQ;
        this.setState({ currQ: temp+1 });

    }

    lastQ = (e) => {
        e.preventDefault();
        const temp = this.state.currQ;
        this.setState({ currQ: temp-1 });
    }

    check = (value, e) => {
        e.preventDefault();
        const temp = this.state.selected;
        temp[this.state.currQ] = value;
        this.setState({ selected: temp });
    }

    getTotal = () => {
        let total = 0;
        for (let v = 0; v < this.state.selected.length; v++) {
            total += this.state.selected[v];
        }
        if (total > 0.5) return "You are at high risk! We strongly recommend you to start a 2-week self-isolation."
        return "Although it's unlikely that you are infected, we still recommend you to start a 2-week self-isolation."
    }
}

export default Questionnaire;








