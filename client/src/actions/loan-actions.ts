import {ActionType} from "./action-type"

export enum loanActionTypes {
    LOAN_ACTION_SET_RATE_SPREAD ="LOAN_ACTION_SET_RATE_SPREAD",
    LOAN_ACTION_SET_TABLE_PAGING = "LOAN_ACTION_SET_TABLE_PAGING"
}

type rateSpread = {
    minRateSpread?:number,
    maxRateSpread?:number
}

type loanPagingInfo = {
    pageSize:number,
    pageNumber:number
}

export type loanAction =
    | ActionType<loanActionTypes.LOAN_ACTION_SET_RATE_SPREAD,rateSpread>
    | ActionType<loanActionTypes.LOAN_ACTION_SET_TABLE_PAGING,loanPagingInfo>


export const setRateSpread = (minRate?:number,maxRate?:number) => {
    return {
        type:loanActionTypes.LOAN_ACTION_SET_RATE_SPREAD,
        payload: {
            minRateSpread:minRate,
            maxRateSpread:maxRate
        }
    };
    // return (dispatch:any) => {
    //     dispatch({
    //         type:loanActionTypes.LOAN_ACTION_SET_RATE_SPREAD,
    //         payload: {
    //             minRateSpread:minRate,
    //             maxRateSpread:maxRate
    //         }
    //     })
    // }
}

export const setPaging = (pageSize:number,pageNumber:number) => {
    return {
        type:loanActionTypes.LOAN_ACTION_SET_TABLE_PAGING,
        payload: {
            pageSize:pageSize,
            pageNumber:pageNumber
        }
    }
    // return (dispatch:any) => {
    //     dispatch({
    //         type:loanActionTypes.LOAN_ACTION_SET_RATE_SPREAD,
    //         payload: {
    //             pageSize:pageSize,
    //             pageNumber:pageNumber
    //         }
    //     })
    // }
}