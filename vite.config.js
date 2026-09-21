import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { ROUTES, pathForPage, seoForPage, renderHead, renderSitemap } from './src/data/seo.js'

const SEO_SLOT = /<!--seo-->[\s\S]*?<!--\/seo-->/
const withSeo = (html, page) => html.replace(SEO_SLOT, `<!--seo-->\n  ${renderHead(seoForPage(page))}\n  <!--/seo-->`)

// Fills index.html's SEO slot, and on build writes a copy of index.html per URL
// (dist/about/index.html, dist/blogs/<slug>/index.html, ...) with that page's tags,
// plus sitemap.xml — so crawlers and link previews get correct tags without running JS.
function seoPages() {
  let outDir
  return {
    name: 'seo-pages',
    configResolved(config) { outDir = join(config.root, config.build.outDir) },
    transformIndexHtml: html => withSeo(html, 'home'),
    closeBundle() {
      if (!outDir) return
      const template = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const page of ROUTES) {
        const dir = join(outDir, pathForPage(page))
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, 'index.html'), withSeo(template, page))
      }
      writeFileSync(join(outDir, 'sitemap.xml'), renderSitemap())
    },
  }
}

export default defineConfig({ plugins: [react(), seoPages()], server: { port: 3000 } })
