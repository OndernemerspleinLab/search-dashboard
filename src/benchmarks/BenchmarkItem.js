import React from 'react'
import styled from 'styled-components'
import { hemelblauw } from '../colors'
import { mediaTextStyle, Media } from '../styles/media'
import { cleanButtonStyle } from '../styles/cleanButton'
import { Score } from '../score/Score'
import { whenChildren } from '../enhancers/whenChildren'

const BenchMarkItemWrapper = styled.button`
	${cleanButtonStyle};
	background-color: ${({ active }) =>
		active ? hemelblauw.grijscontrast : hemelblauw.darkest};
	margin-right: 1px;
	line-height: 1.2;

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
	width: max-content;
`

const TermText = styled.span`
	display: block;
	width: max-content;
`

const TermDate = whenChildren(styled.span`
	display: block;
	width: 100%;
	font-size: 0.8em;
	text-align: center;
`)

export const BenchMarkItem = ({ text, score, date, active }) => (
	<BenchMarkItemWrapper active={active}>
		<Media>
			<Term className="underliner">
				<TermText>{text}</TermText>
				<TermDate>{date}</TermDate>
			</Term>
			<Score number={score} />
		</Media>
	</BenchMarkItemWrapper>
)
