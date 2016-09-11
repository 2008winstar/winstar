import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Main from './common/MainComponent.jsx';
import Home from './common/HomeComponent.jsx';
import About from './common/AboutComponent.jsx';
import Car from './car/CarComponent.jsx';

render(
    <Router history={hashHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
