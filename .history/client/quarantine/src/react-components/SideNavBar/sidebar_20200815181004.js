import React from "react";
import "../../App.css";
import "../../components.css";


class Sidebar extends React.Component {
  state = { title: "Dashboard" };

  state = { title: this.props.title, numRead: 0 };

  render() {
    const notes = this.props.notes;
    const numNotes = this.props.numNotes;
    return (
      <div className="Navbar">
        <div id="mySidebar" className="sidebar">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeSide}
          >
            &times;
          </a>
          {/* TODO: change hrefs to appropriate links */}
          {/*Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>*/}
          <a href="/user1">
            <img
              id="profilePhoto"
              src={require("../../lib/sidebar/sampleprofile.png")}
            />
          </a>
          <p id="profileName">user1</p>
          <a onClick={this.changeNavbarTitle} href="/dashboard">
            <img src={require("../../lib/sidebar/dashboard.png")} /> Dashboard
          </a>
          <a onClick={this.changeNavbarTitle} href="/qa">
            <img src={require("../../lib/sidebar/qa.png")} /> Q&A
          </a>
          <a onClick={this.changeNavbarTitle} href="/userActivities">
            <img src={require("../../lib/sidebar/activity.png")} /> Activities
          </a>
          <a href="/" id="logout">
            log out
          </a>
        </div>

        <div id="main">
          <button className="openbtn" onClick={this.openSide}>
            <img className="logo" src={require("../../lib/appLogo.png")}/> <span>{this.state.title}</span>
          </button>

          <div class="dropdown" id="notification">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="notification2"
              onClick={() => this.removeUnread(numNotes)}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Notifications{" "}
              <span class="badge badge-danger">
                {typeof notes !== "undefined" &&
                  this.state.numRead !== numNotes &&
                  numNotes - this.state.numRead}
              </span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {typeof notes !== "undefined" &&
                notes.map((note) => (
                  <a class="dropdown-item" href="#">
                    {note}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  changeNavbarTitle = (e) => {
    this.setState({ title: e.target.innerText });
    this.closeSide();
  };

  openSide = () => {
    document.getElementById("mySidebar").style.width = "250px";
  };

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeSide = () => {
    document.getElementById("mySidebar").style.width = "0";
  };

  removeUnread = (numNotes) => {
    this.setState({ numRead: numNotes });
  };
}

export default Sidebar;
