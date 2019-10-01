## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting Started

## build the server:
## from root application directory type:  
*yarn;*

## build client
*cd client;*
*yarn; yarn build;*

## Go back to root directory
*cd ..*

## Run Application
*yarn dev*

## Application should be available at http://localhost:3000


# Development Notes

## Added express server

## Express server has REST endpoint for:
### getting all loans   - */api/loans*
### getting specific loans - */api/loan/:id*

## Api running on port 5000

## client running on port 3000

## Loan table implemented using React-Table

## Using React Router when transitioning from Loan List to Loan Detail page.

## Set up React/Redux 

## Using Redux to store rate-spread, page-number, page-size so that this can be maintained when return from detail page to loan list page.


