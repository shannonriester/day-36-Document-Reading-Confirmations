import React from 'react';

const AllDocs = React.createClass({
  render: function(){
    return (
      <div className="allDocs-container">
        <h3>Here are all of your docs!</h3>
        <ul className="ulDocs">
          <SingleDoc />
        </ul>
      </div>
    );
  }
});

export default AllDocs;
