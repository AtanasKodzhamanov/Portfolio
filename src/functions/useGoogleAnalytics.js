import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useGoogleAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-5QCHF815WB', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])
}

export default useGoogleAnalytics
