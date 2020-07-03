import React from "react"

class Pagination extends React.Component {
    render() {
        const pages = []
        for (let i = 1; i <= this.props.len; i++){
            pages.push(i);
        }
        return (
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    {pages.map(i => (<li class="page-item"><a class="page-link bluePagi" href="#" onClick={(e)=>this.handleClick("switch", i, e)}>{i}</a></li>))}
                    <li class="page-item">
                    <a class="page-link" href="#" onClick={(e)=>this.handleClick("next", -1, e)}>Next</a>
                    </li>
                </ul>
            </nav>

        );
    }

    handleClick = (mode, page, e) => {
        const paginations = document.getElementsByClassName("bluePagi");
        for (let i = 0; i<paginations.length; i++){
            paginations[i].style.color="BLUE";
        }
        if (mode === "switch") {
            e.target.style.color = "BLACK";
        }
        this.props.handleClick(mode, page);
    }
}

export default Pagination