import styled, { css } from 'styled-components'
export const accHideStyle = css`
	position: absolute;
	left: -999em;
	top: 0;
	height: 1px;
	width: 1px;
	overflow: hidden;
`
export const AccHide = styled.span`${accHideStyle};`
