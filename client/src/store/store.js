import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { landingPageReducer } from '../reducers/landingPageReducer'
import { newAccountReducer } from '../reducers/newAccountReducer'
import { disqualificationReducer } from '../reducers/disqualificationReducer'

const initialState = {};

const reducers = combineReducers({
  landingPage: landingPageReducer,
  newAccount: newAccountReducer,
  disqualification: disqualificationReducer
})

export const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
)