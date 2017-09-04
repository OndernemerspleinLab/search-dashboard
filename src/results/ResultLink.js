import styled from 'styled-components'
import { hemelblauw } from '../colors'

export const ResultLink = styled.a.attrs({ target: '_blank' })`
	text-decoration: none;
	display: block;
	border-top: 1px solid ${hemelblauw.darkest};
	color: ${hemelblauw.grijscontrast};

	&:last-child {
		border-bottom: 1px solid ${hemelblauw.darkest};
	}
`

export const ResultTitle = styled.div`
	margin: 1rem 0;
	text-decoration: underline;
	flex: auto;
`
