import React from "react";

class ExcerciseCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            overlay:false
        };
        this.onMouseEnter=this._onMouseEnter.bind(this);
        this.onMouseLeave=this._onMouseLeave.bind(this);
    }

    _onMouseEnter() {
        this.setState({overlay:true});
    }

    _onMouseLeave() {
        this.setState({overlay:false});
    }

    render() {
        return (
            <div className="cardCover">
                <div className="card" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    {this.state.overlay ? null:<p>{this.props.name}</p>}
                    {this.state.overlay ? <p>{this.props.info}</p>:null}
                </div>
            </div>
        );
    }
}

export default ExcerciseCard;