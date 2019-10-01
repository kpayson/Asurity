import React from 'react';
import "./index.css";


interface RateSpreadFilterProps {
    min?:number;
    max?:number;
    onFilter: (min?:number,max?:number) => void;
}

interface RateSpreadFilterState {
    min?:number;
    max?:number;
}

export class RateSpreadFilter extends React.Component<RateSpreadFilterProps,RateSpreadFilterState> {
    constructor(props:RateSpreadFilterProps) {
        super(props);
        
        this.state = {
            min:undefined,
            max:undefined
        }
    }

    minRateSpreadChange = (e:any) => {
        this.setState({min:e.target.value});
    }

    maxRateSpreadChange = (e:any) => {
        this.setState({max:e.target.value});
    }

    rateSpreadFilter = (e:any) => {
        this.props.onFilter(this.state.min,this.state.max);
    }

    componentDidMount() {
        this.setState({min:this.props.min, max:this.props.max});
    }

    


    render() {
        const {min,max} = this.state;
        return (
            <div className="rate-spread-filter">
                <label>Rate Spread</label>
                <label>Min</label><input type="text" onChange={this.minRateSpreadChange} value={min}></input>
                <label>Max</label><input type="text" onChange={this.maxRateSpreadChange} value={max}></input>
                <button onClick={this.rateSpreadFilter}>Filter</button>
            </div>
        )
    }
}