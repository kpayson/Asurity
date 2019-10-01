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
    defaultPageSize: number;
    pageNumber:number;
    minRateSpread?: number;
    maxRateSpread?: number;
    onPagingChange:(pageSize:number,pageNumber:number) => void;
};

type LoanTableState = {
    loans: any[];
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

    onPageSizeChange = (x:any) => {
        this.props.onPagingChange(x,this.props.pageNumber);
    }

    onPageChange = (x:any) => {
        this.props.onPagingChange(this.props.defaultPageSize,x);
    }

    render() {

        const alignLeft = (row: any) => <div style={{ textAlign: "left" }}>{row.value}</div>;

        const columns = [
            {
                Header: '',
                accessor: 'loanId',
                Cell: (p: any) => <button className={'button'} onClick={() => this.viewMoreClick(p.value)} value={"View More"}>View More</button>
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

        const { minRateSpread, maxRateSpread, defaultPageSize,pageNumber } = this.props;
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

                data={filteredLoans}
                columns={columns}
                className="-striped -highlight"
                //defaultPageSize={defaultPageSize}
                pageSize={defaultPageSize}
                page={pageNumber}
                onPageChange={this.onPageChange}
                onPageSizeChange={this.onPageSizeChange}


            />
        </div>


    }
}

export const LoanTable = withRouter(_LoanTable)
