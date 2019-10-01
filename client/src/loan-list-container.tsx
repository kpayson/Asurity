import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {setRateSpread, setPaging} from "./actions/loan-actions";
import {LoanList} from "./loan-list";


interface LoanListContainerProps{
    minRateSpread?:number;
    maxRateSpread?:number;
    pageSize:number;
    pageNumber:number;
    setRateSpread:(min?:number,max?:number) => void;
    setPaging:(pageSize:number,pageNUmber:number) => void;
}

class _LoanListContainer extends React.Component<LoanListContainerProps> {

    render() {
        const {minRateSpread,maxRateSpread,pageSize,pageNumber,setRateSpread,setPaging} = this.props;
        return (
        <LoanList
            minRateSpread={minRateSpread}
            maxRateSpread={maxRateSpread}
            pageSize={pageSize}
            pageNumber={pageNumber}
            setRateSpread={setRateSpread}
            setPaging={setPaging}>
            
        </LoanList>)
    }
}

const mapStateToProps = (store:any) => {
    const loanList = store.loanList;
    return {
        minRateSpread:loanList.minRateSpread,
        maxRateSpread:loanList.maxRateSpread,
        pageSize:loanList.pageSize,
        pageNumber:loanList.pageNumber
    }
}

const mapDispatchToProps = (dispatch:any) => ({
    setRateSpread: (min?:number,max?:number) => dispatch(setRateSpread(min,max)),
    setPaging:(pageSize:number,pageNumber:number) => dispatch(setPaging(pageSize,pageNumber))
   })

// const mapDispatchToProps = (dispatch:any) =>
//     bindActionCreators(
//         {
//             setRateSpread,
//             setPaging,
//         },
//         dispatch
//     );

// const mapDispatchToProps = (dispatch:any) => bindActionCreators({
//     setRateSpread, 
//     setPaging
// },dispatch);


export const LoanListContainer = connect(mapStateToProps, mapDispatchToProps)(_LoanListContainer);

