import React from 'react'
import styled from 'styled-components'

const AppComp = styled.div`color: #333;`

export const App = () => {
	return (
		<AppComp className="App">
			<div className="App-header">
				<h2>Welcome to React</h2>
			</div>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</AppComp>
	)
}
