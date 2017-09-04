import styled from 'styled-components'
import { cleanButtonStyle } from '../styles/cleanButton'
import { hemelblauw } from '../colors'
import { nest } from 'recompose'
import { AccHide } from '../styles/accHide'
import { Plus } from '../svg/Plus'
import React from 'react'

const color = hemelblauw.lighter
const AddButtonComponent = styled.button`
	${cleanButtonStyle} border: 2px solid ${color};
	color: ${color};
	fill: ${color};
	position: relative;
	border-radius: 999px;
	width: 3rem;
	height: 3rem;
	flex: none;
	padding: 0.6rem;

	&:hover {
		background: ${hemelblauw.darker};
	}
`

const StyledPlus = styled(Plus)`
	width: 100%;
	height: 100%;
`

export const AddButton = ({ children }) => (
	<AddButtonComponent>
		<StyledPlus />
		<AccHide>{children}</AccHide>
	</AddButtonComponent>
)

const AddButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.8rem;
`

export const AddButtonBlock = nest(AddButtonWrapper, AddButton)
