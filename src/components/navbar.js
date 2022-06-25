import React from "react";

class NavBar extends React.Component {
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
            <div className="navBar">
                <img src={process.env.PUBLIC_URL+"/icons/icon.png"} />
                <p>GymBro</p>
                <div className="searchBar">
                    <input id="searchBarText" type="text" />
                    <button onClick={() => this.props.search(document.getElementById('searchBarText').value)}>Search</button>
                </div>
            </div>
            
        );
    }
}

export default NavBar;