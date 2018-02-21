import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Store from './components/store/Store';
import Detail from './components/store/detail/Detail';
import About from './components/about/About';


  export default (
        <Switch>
	            <Route exact path="/" component={ Home }/>
              <Route path='/detail/:id' component={ Detail }/>
              <Route path="/store" component={ Store }/>
	            <Route path="/about" component={ About }/>
        </Switch>
  )

