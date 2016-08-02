import React from 'react';

import store from '../store';

const DocModal = React.createClass({
  cancel: function(){
    this.props.hideModal();
    store.docModel.cancel();
  },
  confirmRead: function(e){
    e.preventDefault();
    this.props.hideModal();

    let confirmedDocs = store.session.get('readDocs');
    confirmedDocs.push(this.props.docId);
    store.session.set('readDocs', allConfirmedDocs);
    // confirmRead(this.props.docId);

  },
  render: function(){
    console.log(this.props);
    return (
      <div className="modal-container">
        <form className="modal-content" onSubmit={this.confirmRead}>
          <h3>Are you sure you want to mark "{this.props.docTitle}" <span className="emphasis">as read</span>?</h3>
          <input className="submit-btn" type="submit" value="submit" />
          <input className="cancel-btn" type="button" value="cancel" onClick={this.cancel} />
        </form>
      </div>
    );
  }
});

export default DocModal;
