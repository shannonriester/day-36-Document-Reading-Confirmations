import React from 'react';
import {Router, hashHistory, Link} from 'react-router';

const App = React.createClass({

  render: function(){
    return (
      <div className="app">
        <nav className="nav">
          <Link to="/">Your Dox</Link>
          <Link to="/completed">Completed Dox</Link>
          <Link to="/incomplete">Incomplete Dox</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
});

export default App;
