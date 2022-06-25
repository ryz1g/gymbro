import React from "react";

class ExcerciseCard extends React.Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default ExcerciseCard;