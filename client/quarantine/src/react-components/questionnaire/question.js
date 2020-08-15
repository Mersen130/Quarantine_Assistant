import React from 'react';
import '../../components.css';

class Question extends React.Component {
    render() {
        return (
            <div>

                <h1 class="display-3">Questionnaire</h1><br/><br/>
                <div>
                    <h1 class="display-5">#1</h1>
                    <p class="lead">Are you at age group of 0-16/30-inf?</p>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0.3, 0, e)} type="radio" id="customRadioInline11" name="customRadioInline1" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline11">Y</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, 0, e)} type="radio" id="customRadioInline21" name="customRadioInline1" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline21">N</label>
                    </div>
                </div><br/><br/><br/>


                <div>
                    <h1 class="display-5">#2</h1>
                    <p class="lead">Do you feel one or more of the following symptoms? (Sneezing, coughing, fever, difficulty breathing, pneumonia in both lungs)</p>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, 1, e)} type="radio" id="customRadioInline12" name="customRadioInline2" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline12">0</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, 1, e)} type="radio" id="customRadioInline22" name="customRadioInline2" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline22">1</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, 1, e)} type="radio" id="customRadioInline32" name="customRadioInline2" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline32">2</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, 1, e)} type="radio" id="customRadioInline42" name="customRadioInline2" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline42">3</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, 1, e)} type="radio" id="customRadioInline52" name="customRadioInline2" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline52">4</label>
                    </div>
                </div>
                <br/><br/><br/>

                <div>
                    <h1 class="display-5">#3</h1>
                    <p class="lead">Did you have close contact with any person with flu-like symptoms in the past 2 weeks?</p>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, 2, e)} type="radio" id="customRadioInline13" name="customRadioInline3" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline13">Y</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, 2, e)} type="radio" id="customRadioInline23" name="customRadioInline3" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline23">N</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0.5, 2, e)} type="radio" id="customRadioInline33" name="customRadioInline3" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline33">Not sure</label>
                    </div>
                </div><br/><br/><br/>


                <div>
                    <h1 class="display-5"> #4</h1>
                    <p class="lead">Have you travelled outside your province/country in the past 2 weeks?</p>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, 3, e)} type="radio" id="customRadioInline14" name="customRadioInline4" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline14">Y</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, 3, e)} type="radio" id="customRadioInline24" name="customRadioInline4" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline24">N</label>
                    </div>
                </div><br/><br/><br/>


                <div>
                    <h1 class="display-5">#5</h1>
                    <p class="lead">Have you been to anyplace that have confirmed cases in the past 2 weeks?</p>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(1, 4, e)} type="radio" id="customRadioInline15" name="customRadioInline5" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline15">Y</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0, 4, e)} type="radio" id="customRadioInline25" name="customRadioInline5" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline25">N</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={(e)=>this.props.handleCheck(0.5, 4, e)} type="radio" id="customRadioInline35" name="customRadioInline5" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline35">Not sure</label>
                    </div>
                    <div>
                        <button type="button" onClick={this.props.handleSubmit} class="btn btn-primary btnQuest" data-toggle="modal" data-target="#exampleModalCenter">Submit</button>
                    </div>
                </div><br/><br/><br/>

            </div>
        )
    }

}

export default Question;