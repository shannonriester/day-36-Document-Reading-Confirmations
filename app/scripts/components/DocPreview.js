import React from 'react';
import {Router, hashHistory} from 'react-router';

import store from '../store';
import SingleDoc from './SingleDoc';
import DocModal from './DocModal';

const DocPreview = React.createClass({
  routeDocId: function(){
    hashHistory.push(`/docs/${this.props.doc.attributes.id}`);
  },
  render: function(){
    return (
        <li className="doc-preview" onClick={this.routeDocId}>
          <h3>{this.props.doc.attributes.title}</h3>
        </li>
    );
  }
});

export default DocPreview;
