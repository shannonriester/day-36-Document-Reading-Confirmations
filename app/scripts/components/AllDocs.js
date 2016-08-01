import React from 'react';

import store from '../store';
import DocPreview from './DocPreview';

const AllDocs = React.createClass({

  render: function(){
    let docPreview = store.docsCollection.map((doc, i) =>{
      return <DocPreview key={i} doc={doc}/>;
    });

    return (
      <div className="allDocs-container">
        <h3>Here are all of your docs!</h3>
        <ul className="ulDocs">
          {docPreview}
        </ul>
        {this.props.children}
      </div>
    );
  }
});

export default AllDocs;
