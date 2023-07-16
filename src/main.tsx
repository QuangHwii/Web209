import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductProvider from './components/context/productProvider.tsx'
import CounterProvider from './components/context/CounterProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
  </ProductProvider>,
)
