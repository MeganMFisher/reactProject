import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './components/home/Home';
import store from './components/store/Store'
import about from './components/about/About';


  export default (
      <div>
        <Switch>
	            <Route exact path="/" component={ home }/>
              <Route path="/store" component={ store }/>
	            <Route path="/about" component={ about }/>
        </Switch>
      </div>
    )

