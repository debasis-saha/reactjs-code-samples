import React from 'react';
import ReactDOM from 'react-dom';

var headerStyle = {
    backgroundColor :'cyan',
    color:'red',
    fontFamily :'Arial Black',
    width:'500px'
}

ReactDOM.render(
    <div style={headerStyle}>
        <h1 id="header1">Hello World</h1>
        <p>Welcome to the React Learning Series</p>
    </div>,
    document.getElementById('root')
)