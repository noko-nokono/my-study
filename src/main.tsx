import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import { Mock } from '@/components/Mock'
import { Layout } from '@/components/Layout'
import { ReactUpdate } from '@/page/react-update'
import { Version19 } from '@/page/version19'
import { ServerComponent } from '@/page/server-component'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Mock>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            
            <Route path='react-update' element={<ReactUpdate />} />
            <Route path='react-update/version-19' element={<Version19 />} />
            <Route path='react-update/server-component' element={<ServerComponent />} />
          </Route>
        </Routes>
      </Mock>
    </BrowserRouter>  
  </StrictMode>,
)
