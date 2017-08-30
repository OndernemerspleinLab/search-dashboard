// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from '../reducers/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const startStore = () => {
	const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

	return store
}
