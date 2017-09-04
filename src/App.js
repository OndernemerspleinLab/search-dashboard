import React from 'react'
import { injectGlobal } from 'styled-components'
import { startStore } from './store/store'
import { Provider } from 'react-redux'
import { FullLayout, TopArea, MainLayout, SideArea, MainArea } from './Layout'
import { hemelblauw } from './colors'
import { SearchTermOverview } from './searchTerms/SearchTermOverview'
import { initialState } from './store/initialState'

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

export const App = () => (
	<Provider store={store}>
		<FullLayout>
			<TopArea>top</TopArea>
			<MainLayout>
				<SideArea>
					<SearchTermOverview />
				</SideArea>
				<MainArea>main</MainArea>
			</MainLayout>
		</FullLayout>
	</Provider>
)
