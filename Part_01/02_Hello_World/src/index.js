import React from 'react';
import ReactDOM from 'react-dom';

var headerStyle = {
    backgroundColor :'cyan',
    color:'red',
    fontFamily :'Arial Black',
    width:'500px'
}

const message=React.createElement(
    'h1',
    {'id':'message', className: 'header', style: headerStyle},
    'Hello World'
)

ReactDOM.render(
    message,
    document.getElementById('root')
)