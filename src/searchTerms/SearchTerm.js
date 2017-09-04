import React from 'react'
import styled from 'styled-components'
import { hemelblauw } from '../colors'
import { mediaTextStyle, Media } from '../styles/media'
import { cleanButtonStyle } from '../styles/cleanButton'
import { Score } from '../score/Score'
import { connect } from 'react-redux'
import {
	searchTermConnector,
	searchTermScoreConnector,
} from '../connectors/searchTermConnectors'
import { compose } from 'recompose'

const SearchTermWrapper = styled.button`
	${cleanButtonStyle};
	background-color: ${hemelblauw.darkest};
	margin-bottom: 1px;

	&:hover {
		cursor: pointer;
		.underliner {
			text-decoration: underline;
		}
	}
`

const Term = styled.span`
	${mediaTextStyle};
	padding: 0.5em 1em;
`

export const SearchTerm = ({ searchTerm, score }) => (
	<SearchTermWrapper>
		<Media>
			<Term className="underliner">{searchTerm}</Term>
			<Score number={score} />
		</Media>
	</SearchTermWrapper>
)

export const SearchTermConnected = compose(connect(searchTermScoreConnector))(
	SearchTerm,
)
