import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BudgetAppProvider } from './BudgetAppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BudgetAppProvider>
    <App />
    </BudgetAppProvider>
)
