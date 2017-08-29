import React from 'react'
import styled from 'styled-components'

const Main = styled.main`color: #333;`

export const App = () => {
	return (
		<Main className="App">
			<div className="App-header">
				<h2>Welcome to React</h2>
			</div>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</Main>
	)
}
