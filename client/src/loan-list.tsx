import React from 'react';
import {LoanTable} from './loan-table';
import {RateSpreadFilter} from './rate-spread-filter';

interface LoanListState {
    minRateSpread?:number;
    maxRateSpread?:number;
}

export class LoanList extends React.Component<any,LoanListState> {

    constructor(props:any) {
        super(props);
        
        this.state = {
            minRateSpread:undefined,
            maxRateSpread:undefined
        };
    }

    onRateSpreadFilter = (min?:number,max?:number) => {
        this.setState({
            minRateSpread:min,
            maxRateSpread:max
        });
    }

    render() {
        return (
            <div>
                <RateSpreadFilter onFilter={this.onRateSpreadFilter}></RateSpreadFilter>
                <LoanTable minRateSpread={this.state.minRateSpread} maxRateSpread={this.state.maxRateSpread}></LoanTable>
            </div>
        )
    }

}