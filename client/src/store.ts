// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
//   }
// }

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
export default function configureStore() {

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

// composeEnhancers(
//   applyMiddleware(thunk),
//   typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
//     ? window.__REDUX_DEVTOOLS_EXTENSION__({
//       // actionsBlacklist: ['CLEAR_ACTIVE_FILTER', 'SET_ACTIVE_FILTER', 'BROWSER_LOCATION_CHANGED'],
//       maxAge: 200,
//       shouldCatchErrors: true,
//     })
//     : (f:any) => f)

// const store = createStore(
//   createReducer(productMode), //rootReducer,
//   initialState,
//   compose(
//       applyMiddleware(...middleware),
//       typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
//           ? window.__REDUX_DEVTOOLS_EXTENSION__({
//                 // actionsBlacklist: ['CLEAR_ACTIVE_FILTER', 'SET_ACTIVE_FILTER', 'BROWSER_LOCATION_CHANGED'],
//                 maxAge: 200,
//                 shouldCatchErrors: true,
//             })
//           : f => f
//   )
// );