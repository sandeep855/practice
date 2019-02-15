import React,{Component} from "react";

class Top extends Component{
    render() {
        return(
            <div>
                <h2>
                    {this.props.message}
                </h2>
            </div>
        )
    }
}


export default Top;