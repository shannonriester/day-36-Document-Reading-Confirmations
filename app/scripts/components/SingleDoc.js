import React from 'react';

import store from '../store';

const SingleDoc = React.createClass({
  render: function(){
    store.docsCollection.map((doc, i) =>{
      console.log(doc);
    });
    return (
      <li>
      <h2>hi</h2>
      </li>
    );
  }
});

export default SingleDoc;
