
import React from 'react';
import './qa.css';

class Media extends React.Component {
  render(){
    return (
        <div className="container mt-3 Media">
            <div className="media border p-3">
                <img src={require("../lib/profilephotos/Qixin.png")} alt="John Doe" class="mr-3 mt-3 rounded-circle" class="profilephoto"/>
                <div className="media-body">
                    <h4>{this.props.name[0]} <small><i>Posted on February 19, 2016</i></small></h4>
                    <p className="content">{this.props.content[0]}</p>
                    <div className="media p-3">
                        <img src={require("../lib/profilephotos/Yifei.png")} alt="Jane Doe" class="mr-3 mt-3 rounded-circle" class="profilephoto"/>
                        <div className="media-body">
                            <h4>{this.props.name[1]} <small><i>Replied on February 20 2016</i></small></h4>
                            <p class="content">{this.props.content[1]}</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
  }

  search = (e) =>{
      // todo
      return;
  }
}

export default Media;
