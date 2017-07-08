import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './components/home/Home';
import store from './components/store/Store';
import detail from './components/store/detail/Detail';
import about from './components/about/About';


  export default (
        <Switch>
	            <Route exact path="/" component={ home }/>
              <Route path="/store" component={ store }/>
              {/*<Route path='/detail/:id' component={ detail }/>*/}
	            <Route path="/about" component={ about }/>
        </Switch>
  )

