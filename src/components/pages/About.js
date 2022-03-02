import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>App to search Github users </p>
      <p>Version: 2.0.0</p>
      <br />
      <p>Updated from V1.0:</p>
      <ol style={{ marginLeft: '2rem' }}>
        <li>Switch to Routes for react-router-dom V6 compatibility</li>
        <li>Dynamic username params now working with getParams hook</li>
        <li>Some CSS changes to improve UI</li>
      </ol>
    </Fragment>
  );
};

export default About;
