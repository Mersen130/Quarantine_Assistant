import React from 'react';
import '../../components.css';

class DropDown extends React.Component {

    render() {
        return (
            <div class="dropdown show">
                <a class="btn btn-primary dropdown-toggle" onChange={this.props.handleOrder} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Newest
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" onClick={(e) => this.setOrder("Newest", e)} href="#">Newest</a>
                    <a class="dropdown-item" onClick={(e) => this.setOrder("Top rated", e)} href="#">Top Rated</a>
                    <a class="dropdown-item" onClick={(e) => this.setOrder("Hottest", e)} href="#">Hottest</a>
                </div>
            </div>)
    }

    setOrder = (s, e) =>{
        e.preventDefault();
        const text = document.getElementById("dropdownMenuLink");
        // console.log(text);
        text.innerText = s;
        this.props.handleOrder(s);
    }

}

export default DropDown;