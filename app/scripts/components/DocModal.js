import React from 'react';

const DocModal = React.createClass({
  render: function(){
    console.log(this.props.docArr);
    return (
      <div className="modal-container">
        <div className="modal-content">
          test
        </div>
      </div>
    );
  }
});

export default DocModal;
