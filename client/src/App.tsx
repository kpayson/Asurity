import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {LoanList} from './loan-list'
import {LoanDetail} from './loan-detail';

const App: React.FC = () => {
  return (
    <Router>

    <div className="App">
       <header>
        <h2>Ken Payson Asurity</h2> 
      </header>


      <Route exact path="/" component={LoanList} />
      <Route exact path="/loan/:id" component={LoanDetail} />

    </div>
  </Router>


  );
}

export default App;
