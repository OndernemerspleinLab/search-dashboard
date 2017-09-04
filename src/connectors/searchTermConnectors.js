import { getIn, ensureReturnObject, get } from '../utils/gettersSetters'
import { activeSearchQueryIdGetter } from './uiStateConnectors'
import { sortBy, reverseSorter } from '../utils/lists'
import { composeLeftToRight } from '../utils/functional'

export const searchTermConnector = ensureReturnObject((state, { id }) =>
	getIn(['searchTerms', id])(state),
)
export const searchTermScoreConnector = ensureReturnObject((state, { id }) => {
	const activeSearchQueryId = activeSearchQueryIdGetter(state)

	return getIn(['searchTermScores', activeSearchQueryId, id])(state)
})

const getSearchTermList = composeLeftToRight(
	Object.values,
	sortBy(get('weight'), reverseSorter),
)

export const searchTermListConnector = ensureReturnObject((state, { id }) => {
	const searchTerms = get('searchTerms')(state)

	const searchTermList = getSearchTermList(searchTerms)

	return {
		searchTermList,
	}
})
