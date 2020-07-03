import React from 'react';
import '../App.css';
import '../components.css'

class Sidebar extends React.Component {

    state = { title: this.props.title , numUnread: 2}

    render() {
        return (
            <div className="Navbar">
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeSide}>&times;</a>
                    {/* TODO: change hrefs to appropriate links */}
                    {/*Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>*/}
                    <a><img alt="logo" id="profilePhoto" src={require("../lib/sidebar/sampleprofile.png")} /></a>
                    <p id="profileName" >user1</p>
                    <a onClick={this.changeNavbarTitle} href="/dashboard"><img alt="logo" src={require("../lib/sidebar/dashboard.png")} />        Dashboard</a>
                    <a onClick={this.changeNavbarTitle} href="/qa"><img alt="logo" src={require("../lib/sidebar/qa.png")} />        Q&A</a>
                    <a onClick={this.changeNavbarTitle} href="/activity"><img alt="logo" src={require("../lib/sidebar/activity.png")} />        Activities</a>
                    <a onClick={this.changeNavbarTitle} href="#"><img alt="logo" src={require("../lib/sidebar/nearby.png")} />        People nearby</a>
                    <a href="http://www.google.com" id="logout">log out</a>
                </div>

                <div id="main">
                    <button className="openbtn" onClick={this.openSide}>&#9776; {this.state.title}</button>

                    <div className="dropdown notification">
                        <button className="btn btn-secondary dropdown-toggle notification" type="button" id="dropdownMenuButton" onClick={this.removeUnread} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Notifications <span className="badge badge-danger">{this.state.numUnread!==0 && this.state.numUnread}</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Your post "aba aba..." has been deleted.</a>
                            <a className="dropdown-item" href="#">Your reply "aba aba..." has been deleted.</a>
                        </div>
                    </div>
                </div>


            </div>
        );
    }

    changeNavbarTitle = (e) => {
        this.setState({ title: e.target.innerText });
        this.closeSide();
    }

    openSide = () => {
        document.getElementById("mySidebar").style.width = "250px";
    }

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeSide = () => {
        document.getElementById("mySidebar").style.width = "0";
    }

    removeUnread = () =>{
        this.setState({numUnread: 0});
    }
}

export default Sidebar;
