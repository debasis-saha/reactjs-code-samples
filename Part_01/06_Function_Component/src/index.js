import React from 'react';
import ReactDOM from 'react-dom';

const timeRemaining = () =>{
    return 15;
}

const Message = (props) => {
    var style={color:props.color}

    return (
        <div>
                <h1 style={style}>Hello Every One</h1>

                <h2 style={{color:props.color, backgroundColor:"cyan"}}>Welcome to this Online Session on React</h2>

                <p>Duration of the Session : {props.duration} minutes</p>   

                <p>Time Remaining : {timeRemaining()} minutes</p>             
            </div>
    )
}

ReactDOM.render(
    <Message color="red" duration={60}/>,
    document.getElementById('root')
)