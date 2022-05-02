import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '@ritem/core'
import Footer from '@ritem/footer'

import '@unocss/reset/tailwind.css'
import 'uno.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="font-sans px-4 py-10 text-center gray-700 dark:gray-200">
      <Main name="Elone Hoo" />
      <Footer githubLink='elonehoo'/>
    </main>
  </React.StrictMode>,
)
