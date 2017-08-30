import styled, { css } from 'styled-components'
import { hemelblauw } from './colors'

const overflowX = css`
	overflow-x: auto;
	overflow-y: hidden;
`
const overflowY = css`
	overflow-x: hidden;
	overflow-y: auto;
`

export const FullLayout = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	align-content: stretch;
`

export const MainLayout = styled.div`
	flex: auto;
	display: flex;
	flex-direction: row;
	align-items: stretch;
	align-content: stretch;
`

export const TopArea = styled.div`
	${overflowX};
	flex: none;
	height: 4rem;
	background-color: ${hemelblauw.darkest};
	color: ${hemelblauw.lighter};
	margin-bottom: 3px;
`

export const SideArea = styled.div`
	${overflowY};
	flex: none;
	width: 24rem;
	color: ${hemelblauw.lighter};
	display: flex;
	flex-direction: column;

	&::after {
		content: '';
		display: block;
		flex: auto;
		background-color: ${hemelblauw.darkest};
	}
`

export const MainArea = styled.div`
	${overflowY};
	flex: auto;
`
