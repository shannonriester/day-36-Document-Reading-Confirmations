import React from 'react';

import store from '../store';
import DocModal from './DocModal';

const SingleDoc = React.createClass({
  markAsRead: function() {
    console.log('you changed the input checkbox!');
  },
  // getInitialState: function(){
    // return {docModal:false}
  // },
  // showModal: function(){
  //   console.log('you are running the ShowModal function!!');
  //   this.setState({docModal:true});
  // },
  // hideModal: function(){
  //   console.log('you ran the hide the model function!');
  //   this.setState({docModal:false});
  // },
  // let docModal = <DocModal hideModal={this.hideModal} />;
  render: function(){
    let docData = store.docsCollection.get(this.props.params.docId).toJSON();
    console.log(this.props.params);
    // console.log('this ', this);
    return (
        <div className="single-doc">
          <h3>{docData.title}</h3>
          <p>{docData.body}</p>
          <label>Mark as Read<input type="checkbox" onChange={markAsRead}/></label>
        </div>
    );
  }
});

export default SingleDoc;
