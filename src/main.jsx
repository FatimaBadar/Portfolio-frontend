import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
/*  Prime React Configuration */
import { PrimeReactProvider } from "primereact/api";
import './styles/theme.css';
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //flex

render(
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>, document.getElementById('app'))
  