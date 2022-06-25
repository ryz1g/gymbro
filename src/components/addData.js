import React from "react";

class AddData extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this._handleClick.bind(this);
    }

    _handleClick(currentData) {
        let v1=document.getElementById("addDataName").value;
        let v2=document.getElementById("addDataImgSrc").value;
        let v3=document.getElementById("addDataInfo").value;
        if(v1==="" || v2==="" || v3==="") return; 
        let obj={
            id:currentData[currentData.length-1].id+1,
            name:v1,
            info:v3,
            imgSrc:v3,
            show:true
        }
        console.log(obj);
        currentData.push(obj);
    }

    render() {
        return (
            <div className="addData">
                <h1>Add Data</h1>
                <input type="text" id="addDataName" placeholder="Name" />
                <input type="text" id="addDataImgSrc" placeholder="Image source" />
                <input type="text" id="addDataInfo" placeholder="Information about exercise" />
                <button onClick={() => this.handleClick(this.props.currentData)}>Submit</button>
            </div>
        );
    }
}

export default AddData;