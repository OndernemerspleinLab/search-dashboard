import React from 'react'

export const FileText = props => {
	return (
		<svg
			height={16}
			width={12}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 12 16"
			{...props}
		>
			<path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z" />
		</svg>
	)
}