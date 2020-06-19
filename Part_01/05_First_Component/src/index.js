import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component{
    timeRemaining(){
        return 15;
    }

    render() {
        var style={color:this.props.color}
        return (
            <div>
                <h1 style={style}>Hello Every One</h1>

                <h2 style={{color:this.props.color, backgroundColor:"cyan"}}>Welcome to this Online Session on React</h2>

                <p>Duration of the Session : {this.props.duration} minutes</p>

                <p>Time Remaining : {this.timeRemaining()} minutes</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Message color="red" duration={60}/>,
    document.getElementById('root')
)