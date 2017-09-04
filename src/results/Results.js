import React from 'react'
import styled from 'styled-components'
import { ResultList } from './ResultList'
import { ExpectedResultList } from './ExpectedResultList'

const ResultsWrapper = styled.div`
	display: flex;
	padding: 2rem;
`

export const Results = () => {
	return (
		<ResultsWrapper>
			<ExpectedResultList />
			<ResultList />
		</ResultsWrapper>
	)
}
