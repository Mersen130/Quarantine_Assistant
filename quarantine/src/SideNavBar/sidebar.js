import React from "react";
import "../App.css";
import "./sidebar.css";

class Sidebar extends React.Component {
  state = { title: "Dashboard" };

    state = { title: "Dashboard" }

    render() {
        return (
            <div className="Navbar">
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeSide}>&times;</a>
                    {/* TODO: change hrefs to appropriate links */}
                    {/*Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>*/}
                    <a><img id="profilePhoto" src={require("../lib/sidebar/sampleprofile.png")} /></a>
                    <p id="profileName" >Annonymous</p>
                    <a onClick={this.changeNavbarTitle} href="#"><img src={require("../lib/sidebar/dashboard.png")} />        Dashboard</a>
                    <a onClick={this.changeNavbarTitle} href="#"><img src={require("../lib/sidebar/qa.png")} />        Q&A</a>
                    <a onClick={this.changeNavbarTitle} href="#"><img src={require("../lib/sidebar/activity.png")} />        Activities</a>
                    <a onClick={this.changeNavbarTitle} href="#"><img src={require("../lib/sidebar/nearby.png")} />        People nearby</a>
                    <a href="#" id="logout">log out</a>
                </div>

                <div id="main">
                    <button className="openbtn" onClick={this.openSide}>&#9776; {this.state.title}</button>
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
}

export default Sidebar;
