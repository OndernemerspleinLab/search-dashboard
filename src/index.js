// Polyfills
import 'babel-polyfill'
import 'whatwg-fetch'
import 'url-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();
