import React, { Component } from 'react';
import { formatLoan } from "./loan-format";
import "./index.css";

// interface LoanDetailRecord {
//     loanId:string;
//     agencyCode:string;
//     applDate:string;
//     loanPurpose:string;
//     loanType:string;
//     loanAmount:string;
//     loanTerm:string;
//     actionTakenType:string;
//     lockInDate:string;
//     amortizationType:string;
//     apr:string;
//     reverseMortgage:string;
//     latitude:string;
//     longitude:string;
//     rateSpread:string;
// }

interface LoanDetailState {
    loan: any;
}
export class LoanDetail extends Component<any, LoanDetailState>  {
    constructor(props: any) {
        super(props)

        this.state = {
            loan: {
                loanId:"",
                agencyCode:"",
                applDate:"",
                loanPurpose:"",
                loanType:"",
                loanAmount:"",
                loanTerm:"",
                actionTakenType:"",
                lockInDate:"",
                amortizationType:"",
                apr:"",
                reverseMortgage:"",
                latitude:"",
                longitude:"",
                rateSpread:""
            }
        }
    }

    componentDidMount() {

        this.callApi()
            .then(res => this.setState({ loan: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const { match } = this.props;
        const response = await fetch(`/api/loan/${match.params.id}`);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        const formattedLoan = formatLoan(body);
        return formattedLoan;
    };

    backClick = () => {
        this.props.history.push(`/`);
    }

    render() {
        const { match } = this.props;
        const l = this.state.loan;
        return (
            <div className="loan-detail">
                <h2>Loan Detail</h2>

                {/* <Link to="/">Loans</Link> */}

                <div className="row">
                    <label>Loan Id:</label>
                    <div>{l.loanId}</div>
                </div>
                <div className="row">
                    <label>Agency Code:</label>
                    <div>{l.agencyCode}</div>
                </div>
                <div className="row">
                    <label>Application Date:</label>
                    <div>{l.applDate}</div>
                </div>
                <div className="row">
                    <label>Loan Purpose:</label>
                    <div>{l.loanPurpose}</div>
                </div>
                <div className="row">
                    <label>Loan Type:</label>
                    <div>{l.loanType}</div>
                </div>
                <div className="row">
                    <label>Loan Amount:</label>
                    <div>{l.loanAmount}</div>
                </div>
                <div className="row">
                    <label>Loan Term:</label>
                    <div>{l.loanTerm}</div>
                </div>
                <div className="row">
                    <label>Action Taken:</label>
                    <div>{l.actionTakenType}</div>
                </div>
                <div className="row">
                    <label>Lock In Date:</label>
                    <div>{l.lockInDate}</div>
                </div>
                <div className="row">
                    <label>Amortization Type:</label>
                    <div>{l.amortizationType}</div>
                </div>
                <div className="row">
                    <label>APR:</label>
                    <div>{l.apr}</div>
                </div>
                <div className="row">
                    <label>Reverse Mortgage:</label>
                    <div>{l.reverseMortgage}</div>
                </div>
                <div className="row">
                    <label>Latitiude:</label>
                    <div>{l.latitude}</div>
                </div>
                <div className="row">
                    <label>Longitude:</label>
                    <div>{l.longitude}</div>
                </div>
                <div className="row">
                    <label>Rate Spread:</label>
                    <div>{l.rateSpread}</div>
                </div>

                <div className="row">
                    <label><button value="Back" onClick={this.backClick}>Back</button></label>
                </div>
            </div>
        )
    }
}
