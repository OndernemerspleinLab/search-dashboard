import styled from 'styled-components'
import { violet, mosgroen } from '../colors'
import { withChildrenAsFormattedNumber } from '../enhancers/withChildrenAsNumber'
import { mediaFigureStyle } from '../styles/media'

const limit = 6

export const Score = withChildrenAsFormattedNumber(styled.span`
	background-color: ${({ number }) =>
		number < limit ? violet.lightest : mosgroen.lightest};
	color: ${({ number }) =>
		number < limit ? violet.default : mosgroen.default};
	padding: 0.6em 0.4em;
	border: 1px solid
		${({ number }) => (number < limit ? violet.default : mosgroen.default)};
	text-align: center;
	min-width: 2em;
	${mediaFigureStyle};
	margin: 0.3rem;
	font-weight: bold;
	font-size: 1.2rem;
	line-height: 1;
`)
