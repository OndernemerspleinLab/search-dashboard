import { defaultSearchQuery } from './defaultSearchQuery'

export const initialState = {
	searchTerms: {
		ondernemersplan: {
			id: 'ondernemersplan',
			searchTerm: 'Ondernemersplan',
			weight: 1,
			expectedResults: [],
		},
		rechtsvorm: {
			id: 'rechtsvorm',
			searchTerm: 'Rechtsvorm',
			weight: 2,
			expectedResults: [],
		},
	},
	searchTermScores: {
		defaultQuery: {
			id: 'defaultQuery',
			ondernemersplan: {
				id: ['defaultQuery', 'ondernemersplan'],
				score: 3.2,
			},
			rechtsvorm: {
				id: ['defaultQuery', 'rechtsvorm'],
				score: 7,
			},
		},
	},
	searchQueries: {
		defaultQuery: {
			id: 'defaultQuery',
			searchUrl:
				'https://zoeken.ondernemersplein.nl/elasticsearch-update/ondernemersplein/',
			name: 'Huidige query',
			searchQuery: defaultSearchQuery,
		},
	},
	uiState: {
		activeQueryId: 'defaultQuery',
	},
}
