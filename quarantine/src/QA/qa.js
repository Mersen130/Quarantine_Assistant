
import React from 'react';
import './qa.css';
import Media from './media'

class QA extends React.Component {
  render(){
    return (
      <div>
            <div className="jumbotron jumbotron-fluid" class="jumbotron">
                <div className="container">
                    <h1 className="title">Quanrantine Assistant Communities</h1>
                    <p>Find answers, ask questions, and connect with our community of the most authoritative doctors from around the world.</p>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Type your question here"/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.search}>Search !</button>
                    </form>
                </div>
            </div>
            <Media name={["Qixin", "Yifei"]} content={["Aba aba aba?", "Aba aba."]}/>
            <Media name={["Qixin", "Yifei"]} content={["Aba aba aba?", "Aba aba."]}/>
            <Media name={["Qixin", "Yifei"]} content={["Aba aba aba?", "Aba aba."]}/>
            <Media name={["Qixin", "Yifei"]} content={["Aba aba aba?", "Aba aba."]}/>
            <Media name={["Qixin", "Yifei"]} content={["Aba aba aba?", "Aba aba."]}/>

      </div>
    );
  }

  search = (e) =>{
      // todo
      return;
  }
}

export default QA;
