import React from 'react';
import '../components.css';

class Question extends React.Component {
    render() {
        return (
            <div>


                {this.props.currQ === 0 && 
                <div>
                    <h1 className="display-4">Questionnaire #1 (total 5)</h1>
                    <p className="lead">Are you at age group of 0-16/30-inf?</p>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0.3, e)} type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline1">Y</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, e)} type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline2">N</label>
                    </div>
                    <div>
                        <button className="btn btn-secondary btnQuest" onClick={this.props.handleNext}>next question</button>
                    </div>
                </div>}


                {this.props.currQ === 1 && 
                <div>
                    <h1 className="display-4">Questionnaire #2 (total 5)</h1>
                    <p className="lead">Do you feel one or more of the following symptoms? (Sneezing, coughing, fever, difficulty breathing, pneumonia in both lungs)</p>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, e)} type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline1">0</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, e)} type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline2">1</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, e)} type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline3">2</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, e)} type="radio" id="customRadioInline4" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline4">3</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, e)} type="radio" id="customRadioInline5" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline5">4</label>
                    </div>
                    <div>
                        <button className="btn btn-secondary btnQuest" onClick={this.props.handleLast}>last question</button>
                        <button className="btn btn-secondary btnQuest" onClick={this.props.handleNext}>next question</button>
                    </div>
                </div>}


                {this.props.currQ === 2 && 
                <div>
                    <h1 className="display-4">Questionnaire #3 (total 5)</h1>
                    <p className="lead">Did you have close contact with any person with flu-like symptoms in the past 2 weeks?</p>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, e)} type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline1">Y</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, e)} type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline2">N</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0.5, e)} type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline3">Not sure</label>
                    </div>
                    <div>
                        <button className="btn btn-secondary btnQuest" onClick={this.props.handleLast}>last question</button>
                        <button className="btn btn-secondary btnQuest" onClick={this.props.handleNext}>next question</button>
                    </div>
                </div>}


                {this.props.currQ === 3 && 
                <div>
                    <h1 className="display-4">Questionnaire #4 (total 5)</h1>
                    <p className="lead">Have you travelled outside your province/country in the past 2 weeks?</p>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, e)} type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline1">Y</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, e)} type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline2">N</label>
                    </div>
                    <div>
                        <button className="btn btn-secondary btnQuest" onClick={this.props.handleLast}>last question</button>
                        <button className="btn btn-secondary btnQuest" onClick={this.props.handleNext}>next question</button>
                    </div>
                </div>}


                {this.props.currQ === 4 && 
                <div>
                    <h1 className="display-4">Questionnaire #5 (total 5)</h1>
                    <p className="lead">Have you been to anyplace that have confirmed cases in the past 2 weeks?</p>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, e)} type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline1">Y</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, e)} type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline2">N</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0.5, e)} type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline3">Not sure</label>
                    </div>
                    <div>
                        <button className="btn btn-secondary btnQuest" onClick={this.props.handleLast}>last question</button>
                        <button type="button" className="btn btn-primary btnQuest" data-toggle="modal" data-target="#exampleModalCenter">Submit</button>
                    </div>
                </div>}

            </div>
        )
    }

}

export default Question;