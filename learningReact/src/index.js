import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {id: 'abc'}, 'testing');

ReactDOM.render(title, document.getElementById('container'));
