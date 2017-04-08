import React, { Component, PropTypes } from 'react';

const ContentBody = () => {
  const { children } = this.props;
  return (
    <div className="container">
      <br/>
      {children}
    </div>
  );
}

export default ContentBody;
