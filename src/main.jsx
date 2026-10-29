import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <BrowserRouter>
  <GoogleOAuthProvider clientId='259270818835-k7053tppiirvudk28n5o88vovektasuk.apps.googleusercontent.com'>
        <App />
  </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
