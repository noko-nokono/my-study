import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import { Header } from '@/components/Header'
import { About } from '@/page/about'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<App />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  </StrictMode>,
)
