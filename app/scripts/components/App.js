import React from 'react';

import Nav from './Nav';

const App = React.createClass({

  render: function(){
    return (
      <div classNmave="app">
        <nav>
          <Link to"/allDocs">Your Dox</Link>
          <Link to"/completed">Completed Dox</Link>
          <Link to"/incomplete">Incomplete Dox</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
});

export default App;
