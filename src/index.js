import { createRoot } from 'react-dom/client'
// import ReactGA from 'react-ga'
// import ReactGA4 from 'react-ga4'
import App from './App'
import './index.css'

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App tab='home' />)
// ReactGA4.initialize(process.env.REACT_APP_GA_TRACKING_ID_WEB)
// ReactGA.initialize('UA-216107831-1', {
//   siteSpeedSampleRate: 100
// })
