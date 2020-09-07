import React , {Component} from 'react';

class Child extends Component{
    state = {
        a : 1
    }    

    clickHandler = () => {
        this.setState({a : this.state.a + 1})
    }

    render(){
        return(
            <div>
                Child Component {this.state.a}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Child;