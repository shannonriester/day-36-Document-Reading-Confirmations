import React from 'react';

import store from '../store';
import DocPreview from './DocPreview';

const AllDocs = React.createClass({
  getInitialState: function() {
    return {
      showDoc: false,
    }
  },
  showDocFunction: function() {
    this.setState({showDoc: true});
  },
  hideDocFunction: function(){
    this.setState({showDoc:false});
  },
  render: function(){
    let docPreview = store.docsCollection.map((doc, i) =>{
      return (<DocPreview onClick={this.showDocFunction} hideDoc={this.hideDocFunction} key={i} doc={doc}/>);
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
