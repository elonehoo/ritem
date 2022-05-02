import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './pages/index'
import Name from './pages/hi/name'
import All from '@ritem/all'
import Footer from '@ritem/footer'

import '@unocss/reset/tailwind.css'
import 'uno.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="font-sans px-4 py-10 text-center gray-700 dark:gray-200">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hi/:name" element={<Name />} />
          <Route path="*" element={<All />} />
        </Routes>
      </BrowserRouter>
      <Footer githubLink='https://github.com/elonehoo/ritem'/>
    </main>
  </React.StrictMode>,
)
