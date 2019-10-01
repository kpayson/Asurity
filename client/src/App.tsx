import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {LoanListContainer} from './loan-list-container'
import {LoanDetail} from './loan-detail';

import { connect } from 'react-redux';

const App: React.FC = () => {
  return (
    <Router>

    <div className="App">
       <header>
        <h2>Ken Payson Asurity</h2> 
      </header>


      <Route exact path="/" component={LoanListContainer} />
      <Route exact path="/loan/:id" component={LoanDetail} />

    </div>
  </Router>


  );
}

export default connect()(App);
