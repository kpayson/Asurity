import React, { Component } from 'react';
import ReactTable from 'react-table';
import { RouteComponentProps, withRouter } from "react-router-dom"
import "react-table/react-table.css";
import { formatLoan } from "./loan-format";
import './index.css';


// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
    id: string,
}

// Your component own properties
type LoanTableProps = RouteComponentProps<PathParamsType> & {
    minRateSpread?: number;
    maxRateSpread?: number;
};

type LoanTableState = {
    loans: any[];
    minRateSpread?: number;
    maxRateSpread?: number;
}

export class _LoanTable extends Component<LoanTableProps, LoanTableState>  {

    constructor(props: any) {
        super(props)

        this.state = {
            loans: []
        }
    }

    componentDidMount() {
        this.callApi()
            .then(res => {
                const formattedLoans = res.map(formatLoan);
                this.setState({ loans: formattedLoans })
            })
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const { match } = this.props;
        const response = await fetch(`/api/loans/`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    viewMoreClick = (loanId: string) => {
        this.props.history.push(`/loan/${loanId}`)
    }


    render() {

        const alignLeft = (row: any) => <div style={{ textAlign: "left" }}>{row.value}</div>;

        const columns = [
            {
                Header: '',
                accessor: 'loanId',
                Cell: (p: any) => <button data-id={p.value} onClick={() => this.viewMoreClick(p.value)} value={"View More"}>View More</button>
            },
            {
                Header: 'Loan Term',
                accessor: 'loanTerm'
            }, {
                Header: 'Action Taken Type',
                accessor: 'actionTakenType',
                Cell: alignLeft

            }, {
                Header: 'Lock In Date',
                accessor: 'lockInDate',
            },
            {
                Header: 'Amortization Type',
                accessor: 'amortizationType',
            },
            {
                Header: 'APR',
                accessor: 'apr',
            },
            {
                Header: 'Reverse Mortgage',
                accessor: 'reverseMortgage',
            },
            {
                Header: 'Rate Spread',
                accessor: 'rateSpread',
            }
        ]

        const { minRateSpread, maxRateSpread } = this.props;
        const loans = this.state.loans;
        const filteredLoans = loans.filter(x => (!minRateSpread || x.rateSpread >= minRateSpread) && (!maxRateSpread || x.rateSpread <= maxRateSpread))
        return <div>

            <ReactTable
                getTrProps={(state: any, rowInfo: any, column: any) => {

                    return rowInfo && rowInfo.row.rateSpread > 1.5 ? {
                        style: {
                            background: 'pink'
                        }
                    } : {};
                }}

                // getTdProps={(state: any, rowInfo: any, column: any, instance: any) => {
                //     return {
                //         onClick: (e: any, handleOriginal: any) => {
                //             // console.log('A Td Element was clicked!')
                //             // console.log('it produced this event:', e)
                //             // console.log('It was in this column:', column)
                //             // console.log('It was in this row:', rowInfo)
                //             // console.log('It was in this table instance:', instance)

                //             this.props.history.push(`/loan/${rowInfo.original.loanId}`)

                //             if (handleOriginal) {
                //                 handleOriginal()
                //             }
                //         }
                //     }
                // }}

                data={filteredLoans}
                columns={columns}
                className="-striped -highlight"


            />
        </div>


    }
}

export const LoanTable = withRouter(_LoanTable)
