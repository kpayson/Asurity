
// interface LoanData {
//     loanId: string;
//     agencyCode: number;
//     applDate: string;
//     loanPurpose: number;
//     loanType: number;
//     loanAmount: number;
//     loanTerm: number;
//     actionTakenType: number;
//     lockInDate: string;
//     amortizationType: string;
//     apr: number;
//     reverseMortgage: number;
//     latitude: number;
//     longitude: number;
//     rateSpread: number
// };

// const amortizationTypeLookup: { [code: string]: string } = {
//     'VariableRate': 'Variable Rate',
//     'FixedRate':'Fixed Rate'
// };

// const agencyCodeLookup: { [code: number]: string } = {
//     1: 'Comptroller of the Currency (OCC)',
//     2: 'Federal Reserve System (FRS)',
//     3: 'Federal Deposit Insurance Corporation (FDIC)',
//     5: 'National Credit Union A',
//     7: 'United States Department of Housing and Urban Development (HUD)',
//     9: 'Consumer Financial Protection Bureau (CFPB)'
// };

// const loanPurposeLookup:  { [code: number]: string } = {
//     1: 'Home purchase',
//     2: 'Home improvement',
//     3: 'Refinancing'
// };

// const loanTypeLookup:  { [code: number]: string } = {
//     1: 'Conventional (any loan other than FHA VA FSA or RHS loans)',
//     2: 'FHA-insured (Federal Housing Administration)',
//     3: 'VA-guaranteed (Veterans Administration)',
//     4: 'FSA/RHS-guaranteed (Farm Service Agency or Rural Housing Service)'
// };

// const actionTakenTypeLookup:  { [code: number]: string } = {
//     1: 'Loan originated',
//     2: 'Application approved but not accepted',
//     8: 'Preapproval request approved but not accepted (optional reporting)'
// };

//export const formatLoan = (loan:any) => loan;

export function formatLoan(l){return l;}

//{
 //   return loan;
    // return {...loan,
    //     amortizationType: amortizationTypeLookup[loan.amortizationType],
    //     agencyCode: agencyCodeLookup[loan.agencyCode],
    //     loanPurpose: loanPurposeLookup[loan.loanPurpose],
    //     loanType: loanTypeLookup[loan.loanType],
    //     actionTakenType: actionTakenTypeLookup[loan.actionTakenType]   
    
    // }
//}