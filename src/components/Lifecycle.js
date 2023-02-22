import React from "react";

class Lifecycle extends React.Component{

    constructor(){
        super();
        this.state={
            count:0
        }

        console.log('Constructor called');
    }

    

    componentDidMount(){
        console.log('Component Did Mount');
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    // componentWillUnmount(){
    //     console.log('component will un mount');
    // }

    render(){
        return (
            <>
                <h1>Class BAsed Component</h1>

                <p>{this.state.count}</p>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
            </>
        )
    }

} 

export default Lifecycle;


