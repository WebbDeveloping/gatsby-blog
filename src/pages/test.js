import Header from '../components/Header';
import React from 'react';
import { navigate } from 'gatsby';

const Test = () => {
  return (
    <div>
      <Header title="Header of test page" />
      <h1>This is a test page!</h1>
      <h1>This is a test page2!</h1>
      <button onClick={() => navigate('/')}>Navigate to Homepage</button>
    </div>
  );
};
export default Test;
