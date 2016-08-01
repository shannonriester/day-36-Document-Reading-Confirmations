import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/App';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/allDocs" component={AllDocs}/>
        <Route path="/:docId" component={SingleDoc}/>
    </Route>
  </Router>
);

ReactDOM.render(router, documnet.getElementById('container'));
