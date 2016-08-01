import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import AllDocs from './components/AllDocs';
import SingleDoc from './components/SingleDoc';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AllDocs}/>
      <Route path="docs" component={AllDocs}>
        <Route path=":docId" component={SingleDoc}/>
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('container'));
