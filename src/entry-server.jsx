import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { buildJsonLd } from './seo.js'

export function render() {
  return {
    html: renderToString(<App />),
    jsonLd: JSON.stringify(buildJsonLd()),
  }
}
