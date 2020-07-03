import React from 'react';
import '../components.css'
import "./question.js"
import Question from './question.js';

class Questionnaire extends React.Component {
    state = { currQ: 0, selected: [-1, -1, -1, -1, -1] }

    render() {
        return (
            <div>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Well done!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {this.getTotal()}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => window.location.href = "/signin"}>Exit</button>
                                <button type="button" class="btn btn-primary" onClick={() => window.location.href = "/signup"}>Continue to signup...</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="jumbotron jumbotron-fluid" id="jumbotronQuest">
                    <div class="container" id="containerQuest">
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
        this.setState({ currQ: ++this.state.currQ });
    }

    lastQ = (e) => {
        e.preventDefault();
        this.setState({ currQ: --this.state.currQ });
    }

    check = (value, e) => {
        e.preventDefault();
        this.state.selected[this.state.currQ] = value;
    }

    getTotal = () => {
        let total = 0;
        for (let v = 0; v < this.state.selected.length; v++) {
            total += this.state.selected[v];
        }
        console.log(total);
        if (total > 0.5) return "You are at high risk! We strongly recommend you to start a 2-week self-isolation."
        return "Although it's unlikely that you are infected, we still recommend you to start a 2-week self-isolation."
    }
}

export default Questionnaire;








