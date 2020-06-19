import React from 'react';
import ReactDOM from 'react-dom';

var headerStyle = {
    backgroundColor :'cyan',
    color:'red',
    fontFamily :'Arial Black',
    width:'500px'
}

const message=React.createElement(
    'ul',
    {'id':'message', className: 'header', style: headerStyle},
    React.createElement(
        'li',
        {},
        'Line 1'
    ),
    React.createElement(
        'li',
        {},
        'Line 2'
    )
)

ReactDOM.render(
    message,
    document.getElementById('root')
)