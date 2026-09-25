import { readFileSync, readdirSync } from 'node:fs'
import { gzipSync } from 'node:zlib'
import { resolve } from 'node:path'

const root = resolve('dist')
const manifest = JSON.parse(readFileSync(resolve(root, '.vite/manifest.json'), 'utf8'))
const visited = new Set()
const files = new Set(['index.html'])
function collect(key) {
  if (visited.has(key)) return
  visited.add(key)
  const chunk = manifest[key]
  if (!chunk) throw new Error(`Missing manifest entry: ${key}`)
  files.add(chunk.file)
  for (const css of chunk.css ?? []) files.add(css)
  for (const dependency of chunk.imports ?? []) collect(dependency)
}
for (const [key, chunk] of Object.entries(manifest)) {
  // Hero content loads immediately; include it even though React uses lazy().
  if (chunk.isEntry || key.endsWith('/Hero.tsx')) collect(key)
}
const initial = [...files].reduce((sum, file) => sum + gzipSync(readFileSync(resolve(root, file))).length, 0)
const all = readdirSync(resolve(root, 'assets')).filter(file => /\.(js|css)$/.test(file)).reduce((sum, file) => sum + gzipSync(readFileSync(resolve(root, 'assets', file))).length, 0)
console.log(JSON.stringify({ initialGzipBytes: initial, allJsCssGzipBytes: all, initialLimit: 293000, totalLimit: 293000, initialFiles: [...files] }, null, 2))
if (initial > 293000 || all > 293000) process.exitCode = 1
