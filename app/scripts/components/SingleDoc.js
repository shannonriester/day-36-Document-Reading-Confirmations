import React from 'react';

import store from '../store';
import DocModal from './DocModal';

const SingleDoc = React.createClass({
  getInitialState: function(){
    return {
      showModal:false,
      checkbox: store.docModel.get('isRead'),
      confirmed: store.docModel.get('confirmed')
    }
  },
  componentDidMount: function(){
    store.docModel.on('change', () => {
      this.setState({checkbox:store.docModel.get('isRead')});
      // this.setState({showModal:store.docModel.get('confirmed')});
    });
  },
  clickedCheckbox: function(){
    store.docModel.markAsRead();
    this.setState({showModal:true});
  },
  confirmedRead: function(){
    store.docModel.confirmAsRead();
    document.querySelector('input-checkbox').disabeled = true;
    this.setState({showModal:false});
  },
  hideModal: function(){
    this.setState({showModal:false});
  },
  render: function(){
    let docData = store.docsCollection.get(this.props.params.docId).toJSON();

    let docModal;
    if (this.state.showModal) {
      docModal = <DocModal hideModal={this.hideModal} confirmedRead={this.confirmedRead} docTitle={docData.title}/>
    }
    let checkbox;
      if (!this.state.checkbox && !this.state.confirmed){
        checkbox = <label>Mark as Read <input className="input-checkbox" type="checkbox" checked={this.state.checkbox} onClick={this.clickedCheckbox}/></label>
      }
      else {
        checkbox = <label>Read <input className="input-checkbox" type="checkbox" checked={this.state.checkbox}/></label>
      }
      // else if (this.state.checkbox)



    return (
        <div className="single-doc">
          <h3>{docData.title}</h3>
          <p>{docData.body}</p>
          {checkbox}
          {docModal}
        </div>
    );
  }
});

export default SingleDoc;
