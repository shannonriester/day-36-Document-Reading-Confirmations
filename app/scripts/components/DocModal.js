import React from 'react';

const DocModal = React.createClass({
  cancel: function(){
    this.props.hideModal();
    
  },
  render: function(){
    console.log(this.props);
    return (
      <div className="modal-container">
        <form className="modal-content">
          <h3>Are you sure you want to mark "{this.props.docTitle}" <span className="emphasis">as read</span>?</h3>
          <input className="submit-btn" type="submit" value="submit" />
          <input className="cancel-btn" type="button" value="cancel" onClick={this.cancel} />
        </form>
      </div>
    );
  }
});

export default DocModal;
