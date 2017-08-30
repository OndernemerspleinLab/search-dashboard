// @flow

import React from 'react'
import { injectGlobal } from 'styled-components'
import { startStore } from './store/store'
import { Provider } from 'react-redux'
import { FullLayout, TopArea, MainLayout, SideArea, MainArea } from './Layout'
import { hemelblauw } from './colors'

injectGlobal`
	:root {
		line-height: 1.6;
		font-family: sans-serif;
		background-color: ${hemelblauw.lightest}
	}

	* {
		box-sizing: border-box;
	}
`

const store = startStore()

export const App = () => (
	<Provider store={store}>
		<FullLayout>
			<TopArea>top</TopArea>
			<MainLayout>
				<SideArea>side</SideArea>
				<MainArea>main</MainArea>
			</MainLayout>
		</FullLayout>
	</Provider>
)
