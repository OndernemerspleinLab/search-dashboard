// @flow

import React from 'react'
import styled from 'styled-components'
import { hemelblauw, violet, mosgroen } from '../colors'
import { withChildrenAsFormattedNumber } from '../enhancers/withChildrenAsNumber'
import { mediaFigureStyle, mediaTextStyle, Media } from '../styles/media'
import { cleanButtonStyle } from '../styles/cleanButton'

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
const Score = withChildrenAsFormattedNumber(styled.span`
	background-color: ${({ number }) =>
		number < 6 ? violet.lightest : mosgroen.lightest};
	color: ${({ number }) => (number < 6 ? violet.default : mosgroen.default)};
	padding: 0.6em 0.4em;
	border: 1px solid ${hemelblauw.darkest};
	text-align: center;
	min-wdith: 2em;
	${mediaFigureStyle};
	margin: 0.3rem 0.3rem 0.3rem 0;
	font-weight: bold;
	font-size: 1.2rem;
	line-height: 1;
`)

type Props = {
	searchTerm?: string,
	score?: number,
}

export const SearchTerm = ({ searchTerm, score }: Props) => (
	<SearchTermWrapper>
		<Media>
			<Term className="underliner">{searchTerm}</Term>
			<Score number={score} />
		</Media>
	</SearchTermWrapper>
)
