import React from 'react';
import '../../components.css';
import "./question.js"
import Question from './question.js';

class Questionnaire extends React.Component {
    state = {selected: [-1, -1, -1, -1, -1], show: false }

    render() {
        return (
            <div>
                <div class="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                    {this.state.show == true && <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Notice</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {(() => {
                                    const ans = this.getTotal();
                                    if (ans == "failed"){
                                        return "Please complete all questions.";
                                    }
                                    return ans;
                                })()}
                            </div>
                            {this.getTotal() !== "failed" && <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => window.location.href = "/"}>Exit</button>
                                <button type="button" class="btn btn-primary" onClick={() => window.location.href = "/signup"}>Continue to signup...</button>
                            </div>}
                        </div>}
                    </div>
                </div>
                <div class="jumbotron jumbotron-fluid" id="jumbotronQuest">
                    <div class="container" id="containerQuest">
                        <Question handleSubmit = {this.handleSubmit} handleCheck={this.check} />
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit = () => {
        this.setState({show: true});
    }

    check = (value, i, e) => {
        e.preventDefault();
        this.state.selected[i] = value;
    }

    getTotal = () => {
        let total = 0;
        // console.log(this.state.selected);

        for (let v = 0; v < this.state.selected.length; v++) {
            if (this.state.selected[v] === -1){
                return "failed";
            }
            total += this.state.selected[v];
        }
        // console.log(total);
        // todo: a server call that sends data
        if (total > 0.5) return "You are at high risk! We strongly recommend you to start a 2-week self-isolation."
        return "Although it's unlikely that you are infected, we still recommend you to start a 2-week self-isolation."
    }
}

export default Questionnaire;








