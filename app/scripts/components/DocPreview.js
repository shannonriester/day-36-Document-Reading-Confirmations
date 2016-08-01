import React from 'react';
import {Router, hashHistory} from 'react-router';

import store from '../store';
import SingleDoc from './SingleDoc';
import DocModal from './DocModal';

const DocPreview = React.createClass({
  // getInitialState: function(){
  //   return {showDoc:false}
  // },
  routeDocId: function(){
    hashHistory.push(`/docs/${this.props.doc.attributes.id}`);
    // this.setState({singleDoc:true});
    // console.log('state in route-function',this.state);
  },
  // let docModal = <DocModal hideModal={this.hideModal} />;
  render: function(){
    // console.log('this.props.doc.attributes ', this.props.doc.attributes);
    // console.log('state before return-render', this.state);

    let singleDoc = <SingleDoc id={this.props.doc.attributes.id}
                           title={this.props.doc.attributes.title}
                           body={this.props.doc.attributes.body} />;
    return (
        <li className="doc-preview" onClick={this.routeDocId}>
          <h3>{this.props.doc.attributes.title}</h3>
        </li>
    );
  }
});

export default DocPreview;
