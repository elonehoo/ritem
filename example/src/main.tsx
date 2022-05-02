import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './pages/index'
import Footer from '@ritem/footer'

import '@unocss/reset/tailwind.css'
import 'uno.css'

function go(){
  console.log('go')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="font-sans px-4 py-10 text-center gray-700 dark:gray-200">
      <App />
      <Footer githubLink='https://github.com/elonehoo/ritem'/>
    </main>
  </React.StrictMode>,
)
