// Prerender: inyecta el HTML de la app y el JSON-LD en dist/index.html para que
// buscadores y rastreadores de IA (que no ejecutan JS) lean el contenido completo.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = resolve(root, 'dist/index.html')
const ssrDir = resolve(root, 'dist-ssr')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const { html, jsonLd } = render()

let template = await readFile(indexPath, 'utf8')
if (!template.includes('<!--app-html-->') || !template.includes('<!--jsonld-->')) {
  throw new Error('dist/index.html no contiene los marcadores <!--app-html--> / <!--jsonld-->')
}

// "<" escapado para que el JSON nunca pueda cerrar la etiqueta <script>
const safeJsonLd = jsonLd.replace(/</g, '\\u003c')
template = template
  .replace('<!--app-html-->', () => html)
  .replace('<!--jsonld-->', () => `<script type="application/ld+json">${safeJsonLd}</script>`)

await writeFile(indexPath, template)
await rm(ssrDir, { recursive: true, force: true })
console.log(`Prerender OK: ${(html.length / 1024).toFixed(1)} KB de HTML + JSON-LD en dist/index.html`)
