import React from "react";
import { ReactDOM } from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.activeSearch = setInterval(
            () => this.props.search(document.getElementById('searchBarText').value),
            250
        );
    }
    componentWillUnmount() {
        clearInterval(this.activeSearch);
    }
    render() {
        return (
            <div className="searchBar">
                <input id="searchBarText" type="text" />
                <button onClick={() => this.props.search(document.getElementById('searchBarText').value)}>Search</button>
            </div>
        );
    }
}

export default SearchBar;