import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import home from './components/home/Home';
import store from './components/store/Store'
import about from './components/about/About';

class Router extends Component {
  render() {
    return (
      <div>
        <HashRouter>
	        <div>
	            <Route exact path="/" component={ home }/>
              <Route path="/store" component={ store }/>
	            <Route path="/about" component={ about }/>
	        </div>
        </HashRouter>
      </div>
    );
  }
}

export default Router;