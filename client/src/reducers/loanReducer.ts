import { loanAction,loanActionTypes} from "../actions/loan-actions";


export interface LoanListState {
    minRateSpread?:number;
    maxRateSpread?:number;
    pageSize:number;
    pageNumber:number
}

const initialState:LoanListState = {
    minRateSpread:undefined,
    maxRateSpread:undefined,
    pageSize:20,
    pageNumber:0
}

export default (state = initialState, action:loanAction) => {
    switch (action.type) {
        case loanActionTypes.LOAN_ACTION_SET_RATE_SPREAD:
            return {
                ...state,
                minRateSpread: action.payload.minRateSpread,
                maxRateSpread: action.payload.maxRateSpread
            }
        case loanActionTypes.LOAN_ACTION_SET_TABLE_PAGING:
            return {
                ...state,
                pageSize:action.payload.pageSize,
                pageNumber:action.payload.pageNumber

            }
        default:
            return state
    }
}