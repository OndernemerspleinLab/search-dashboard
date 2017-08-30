// @flow

export opaque type Uuid: string = string
export opaque type SearchTermId: Uuid = Uuid
export opaque type SearchQueryId: Uuid = Uuid
export opaque type ExpectedResultId: Uuid = Uuid
export opaque type ActualResultId: Uuid = Uuid
export opaque type Url: string = string

export type SearchTerms = {
	[SearchTermId]: {
		term: string,
		weight: number,
		expectedResults: ExpectedResultId[],
	},
}

export type SearchQueries = {
	[SearchQueryId]: {
		name: string,
		query: string,
	},
}

export type Result = {
	text: string,
	url: Url,
}

export type ExpectedResults = {
	[ExpectedResultId]: Result,
}

export type ActualResults = {
	[ActualResultId]: Result,
}

export type Score = {
	score: number,
}

export type SearchTermScores = {
	[SearchQueryId]: {
		[SearchTermId]: Score,
	},
}

export type SearchQueryScores = {
	[SearchQueryId]: {
		[SearchTermId]: Score,
	},
}

export type UiState = {}

export type State = {
	searchTerms: SearchTerms,
	SearchTermList: SearchTermId[],
	searchQueries: SearchQueries,
	SearchQueryList: SearchTermId[],
	expectedResults: ExpectedResults,
	expectedResultList: ExpectedResultId[],
	actualResults: ActualResults,
	actualResultList: ActualResultId[],
	searchTermScores: SearchTermScores,
	searchQueryScores: SearchQueryScores,
	ui: UiState,
}
