import { useEffect } from 'react'
import ReactGA4 from 'react-ga4' // for GA
import ReactGA from 'react-ga' // for UA (old)

export const usePageTracker = () => {
  useEffect(() => {
    ReactGA4.send('pageview')
    ReactGA.pageview(window.location.pathname)
  }, [])
}