import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

export default function PrimaryLayout(props) {
  return (
    <div>
      <Header title="Header of index page"></Header>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
