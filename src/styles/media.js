// @flow

import styled, { css } from 'styled-components'

export const mediaStyle = css`
	display: flex;
	flex-direction: row;
	align-items: ${({ top, bottom }) =>
		top ? 'flex-start' : bottom ? 'flex-end' : 'center'};
`

export const Media = styled.span`${mediaStyle};`

export const mediaFigureStyle = css`flex: none;`
export const mediaTextStyle = css`flex: auto;`
