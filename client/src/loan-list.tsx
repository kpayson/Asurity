import React from 'react';
import {LoanTable} from './loan-table';
import {RateSpreadFilter} from './rate-spread-filter';

interface LoanListProps{
    minRateSpread?:number;
    maxRateSpread?:number;
    pageSize:number;
    pageNumber:number;
    setRateSpread:(min?:number,max?:number) => void;
    setPaging:(pageSize:number,pageNUmber:number) => void;
}

export class LoanList extends React.Component<LoanListProps> {

    onRateSpreadFilter = (min?:number,max?:number) => {
        // this.setState({
        //     minRateSpread:min,
        //     maxRateSpread:max
        // });
        this.props.setRateSpread(min,max);
    }

    onPagingChange = (pageSize:number,pageNumber:number) => {
        this.props.setPaging(pageSize,pageNumber);
    }

    render() {
        const {minRateSpread,maxRateSpread,pageSize,pageNumber,setPaging} = this.props;

        return (
            <div>
                <RateSpreadFilter onFilter={this.onRateSpreadFilter} min={this.props.minRateSpread} max={this.props.maxRateSpread}></RateSpreadFilter>
                <LoanTable
                    minRateSpread={minRateSpread} 
                    maxRateSpread={maxRateSpread}
                    defaultPageSize={pageSize}
                    pageNumber={pageNumber}
                    onPagingChange={setPaging}
                    >
                    
                </LoanTable>
            </div>
        )
    }

}