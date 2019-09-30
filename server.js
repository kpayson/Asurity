//import {formatLoan} from "./loan-format";

const express = require('express');
//const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

const formatLoan = (loan) => loan;
const loandata = require('./loan-data.json');

app.get('/api/loans', function (req, res) {
  const formattedData = loandata.map(formatLoan)
  res.header("Content-Type",'application/json');

  res.send(JSON.stringify(formattedData));
})

app.get('/api/loan/:id',function(req,res) {
  const id = req.params.id;
  const loan = loandata.find((x)=> x.loanId === id);
  if(loan) {
      res.send(JSON.stringify(formatLoan(loan)));
  } else {
      throw new Error("loanId:" + loanId + " not found");
  }

});



app.listen(port, () => console.log(`Listening on port ${port}`));