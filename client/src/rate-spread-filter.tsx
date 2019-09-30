import React from 'react';
import "./index.css";


interface RateSpreadFilterProps {
    onFilter: (min?:number,max?:number) => void;
}

interface RateSpreadFilterState {
    min?:number;
    max?:number;
}

export class RateSpreadFilter extends React.Component<RateSpreadFilterProps,RateSpreadFilterState> {

    minRateSpreadChange = (e:any) => {
        this.setState({min:e.target.value});
    }

    maxRateSpreadChange = (e:any) => {
        this.setState({max:e.target.value});
    }

    rateSpreadFilter = (e:any) => {
        this.props.onFilter(this.state.min,this.state.max);
    }

    render() {
        return (
            <div className="rate-spread-filter">
                <label>Rate Spread</label>
                <label>Min</label><input type="text" onChange={this.minRateSpreadChange}></input>
                <label>Max</label><input type="text" onChange={this.maxRateSpreadChange}></input>
                <button onClick={this.rateSpreadFilter}>Filter</button>
            </div>
        )
    }
}