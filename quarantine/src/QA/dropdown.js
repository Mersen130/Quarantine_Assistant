import React from 'react';
import './qa.css';
class DropDown extends React.Component {

    render() {
        return (
            <div class="dropdown show">
                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Newest
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Newest</a>
                    <a class="dropdown-item" href="#">Top Rated</a>
                    <a class="dropdown-item" href="#">Hottest</a>
                </div>
            </div>)
    }

}

export default DropDown;