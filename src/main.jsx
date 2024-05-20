import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Theme, Github } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
	<Theme />
	<Github />
  </React.StrictMode>,
)
