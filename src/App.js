import React from 'react'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import { startStore } from './store/store'
import { Provider } from 'react-redux'
import { FullLayout, TopArea, MainLayout, SideArea, MainArea } from './Layout'
import { hemelblauw, violet } from './colors'
import { SearchTermOverview } from './searchTerms/SearchTermOverview'
import { initialState } from './store/initialState'
import { BenchmarkOverview } from './benchmarks/BenchmarkOverview'
import { Results } from './results/Results'

injectGlobal`
	:root {
		line-height: 1.6;
		font-family: sans-serif;
		background-color: ${hemelblauw.lightest}
	}

	* {
		box-sizing: border-box;
	}

	button {
		cursor: pointer;
	}

	button:focus {
		box-shadow: inset 0 0 0 0.4rem ${hemelblauw.darker};
		outline: none;
	}
`

const store = startStore(initialState)

const MockupWarning = styled.p.attrs({ children: 'Mockup' })`
	position: absolute;
	right: 4rem;
	bottom: 3rem;
	margin: 0;
	color: ${violet.default};
	font-size: 4rem;
	font-weight: bold;
	opacity: 0.7;
	transform: rotate(-10deg);
	border-top: 2px solid;
	border-bottom: 2px solid;
	padding-bottom: 0.6rem;
	line-height: 1;
`

export const App = () => (
	<Provider store={store}>
		<div>
			<FullLayout>
				<TopArea>
					<BenchmarkOverview />
				</TopArea>
				<MainLayout>
					<SideArea>
						<SearchTermOverview />
					</SideArea>
					<MainArea>
						<Results />
					</MainArea>
				</MainLayout>
			</FullLayout>
			<MockupWarning />
		</div>
	</Provider>
)
