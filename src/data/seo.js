/* URLs and SEO tags for every page. Used at runtime by App.jsx (routing + updating
   <head> on navigation) and at build time by vite.config.js (a pre-rendered HTML file
   per URL so link previews and crawlers see the right tags without running JS). */
import { SOLUTIONS } from './content.js'
import { BLOGS } from './blogs.js'

export const SITE_URL = 'https://www.greenchipenergy.com'
const SITE_NAME = 'GreenChip Energy'
const DEFAULT_IMAGE = '/images/blog-greenchip-smart-solar-epc-india.jpg'
const LOGO = '/images/logo1.png'

const PAGES = {
  home: { path: '/', title: 'GreenChip Energy — Smart Solar EPC Solutions in India', description: "End-to-end Solar EPC for industries, businesses & governments. Cut energy bills up to 70% with India's trusted clean-tech partner." },
  about: { path: '/about/', title: 'About Us', description: 'Since 2017, Hyderabad-based GreenChip Energy has delivered turnkey renewable energy solutions to commercial, industrial and public sector clients across India.' },
  values: { path: '/values/', title: 'Our Values', description: 'The values that guide how GreenChip Energy designs, builds and maintains solar and renewable energy projects across India.' },
  approach: { path: '/approach/', title: 'Our Approach', description: 'The proven four-stage methodology GreenChip Energy uses to deliver renewable energy projects, from first consultation to commissioning.' },
  ethics: { path: '/ethics/', title: 'Ethics & Principles', description: 'The ethics and principles behind GreenChip Energy’s work with clients, partners and communities.' },
  team: { path: '/team/', title: 'Our Team', description: 'Meet the leadership and engineering team behind GreenChip Energy’s solar and energy infrastructure projects.' },
  solutions: { path: '/solutions/', title: 'Solar & Renewable Energy Solutions', description: 'Rooftop, ground-mounted, floating and carport solar, solar parks, battery storage, hybrid solar-wind, wind turbines and substations from GreenChip Energy.' },
  services: { path: '/services/', title: 'Our Services', description: 'Solar EPC, financing, asset management and operations & maintenance services from GreenChip Energy for projects across India.' },
  epc: { path: '/epc/', title: 'Solar EPC Services', description: 'Turnkey solar Engineering, Procurement and Construction from GreenChip Energy — from design and sourcing to installation, commissioning and monitoring.' },
  financing: { path: '/financing/', title: 'Solar Financing', description: 'Capex, PPA and OPEX financing options for commercial and industrial solar projects with GreenChip Energy — go solar with little or no upfront cost.' },
  assetmanagement: { path: '/asset-management/', title: 'Solar Asset Management', description: 'Solar asset management from GreenChip Energy: performance monitoring, data analytics and expert optimisation to protect long-term plant returns.' },
  projects: { path: '/projects/', title: 'Our Projects', description: 'Solar and renewable energy projects delivered by GreenChip Energy across India, with photos from our latest installations.' },
  calculator: { path: '/calculator/', title: 'Solar Calculator', description: 'Estimate your rooftop or ground-mount solar system size, cost and savings with the GreenChip Energy solar calculator.' },
  careers: { path: '/careers/', title: 'Careers', description: 'Join GreenChip Energy and help power India’s clean energy transition. See current openings in solar engineering, projects and more.' },
  blogs: { path: '/blogs/', title: 'Blogs', description: 'Insights, guides and updates from GreenChip Energy on solar EPC, rooftop solar, battery storage, substations and India’s clean energy market.' },
  contact: { path: '/contact/', title: 'Contact Us', description: 'Get in touch with GreenChip Energy’s solar experts in Hyderabad for a quote or consultation on your solar or energy infrastructure project.' },
  initiatives: { path: '/initiatives/', title: 'New Initiatives', description: 'GreenChip Energy’s new initiatives beyond solar, including green hydrogen and compressed biogas (Bio-CNG) production.' },
  ni_hydrogen: { path: '/initiatives/green-hydrogen/', title: 'Green Hydrogen', description: 'Green hydrogen solutions from GreenChip Energy, part of our core focus alongside solar and battery energy storage.' },
  ni_cbg: { path: '/initiatives/bio-cng/', title: 'CBG (Bio-CNG) Production Plants', description: 'Customised CBG (Bio-CNG) production plant solutions from GreenChip Energy, with product guarantee, after-sales service and subsidy and loan support.' },
}

const SOLUTION_DESCRIPTIONS = {
  rooftop: 'Commercial and industrial rooftop solar from GreenChip Energy: cut energy costs, lower your carbon footprint and earn from excess power sold to the grid.',
  ground: 'Ground-mounted solar for any scale of deployment, optimally tilted and oriented for maximum generation on commercial and industrial land.',
  solarpark: 'Utility-scale solar parks from GreenChip Energy: grid-level PV power stations with shared grid connection and infrastructure for lower per-unit cost.',
  bess: 'Battery energy storage (BESS) paired with solar: store excess daytime solar and use it at night or during outages, with lithium-ion and LiFePO4 systems.',
  floating: 'Floating solar for reservoirs, irrigation tanks and industrial ponds: clean energy plus up to 70% less water evaporation.',
  carport: 'Solar carports turn parking areas into power plants, generating clean energy while shading vehicles, without using extra land.',
  hybrid: 'Hybrid solar and wind systems with GreenChip controllers for uninterrupted power and instant changeover between grid and off-grid sources.',
  substation: 'EPC of switchyards and substations up to 400/220/132 kV: supply, erection, testing and commissioning, plus EHV substation and transmission line engineering.',
  wind: 'Wind farm project development from GreenChip Energy, starting with securing the best land for your wind farm to harness India’s wind potential.',
}

for (const s of SOLUTIONS) {
  PAGES[`sol_${s.id}`] = { path: `/solutions/${s.id}/`, title: s.sub ? `${s.title} — ${s.sub}` : s.title, description: SOLUTION_DESCRIPTIONS[s.id] ?? s.tagline, image: `/images/${s.img}` }
}
PAGES.rooftop = PAGES.sol_rooftop // legacy alias used by some buttons

for (const b of BLOGS) {
  PAGES[b.page] = { path: `/blogs/${b.slug}/`, title: b.metaTitle, description: b.description, keywords: b.keywords, image: `/images/${b.img}`, blog: b }
}

/** Every distinct URL, for pre-rendering and the sitemap. */
export const ROUTES = Object.keys(PAGES).filter(p => p !== 'rooftop')

export const pathForPage = page => (PAGES[page] ?? PAGES.home).path

export function pageForPath(pathname) {
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\/?$/, '/')
  return ROUTES.find(p => PAGES[p].path === path) ?? 'home'
}

const abs = path => SITE_URL + encodeURI(path)

export function seoForPage(page) {
  const p = PAGES[page] ?? PAGES.home
  const title = p.title.includes(SITE_NAME) ? p.title : `${p.title} | ${SITE_NAME}`
  const url = abs(p.path)
  const image = abs(p.image ?? DEFAULT_IMAGE)
  const org = { '@type': 'Organization', name: SITE_NAME, url: SITE_URL, logo: abs(LOGO) }
  const jsonLd = p.blog
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: p.blog.title,
        description: p.description,
        image,
        datePublished: p.blog.datePublished,
        dateModified: p.blog.datePublished,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: org,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        keywords: p.keywords,
      }
    : p.path === '/'
      ? { '@context': 'https://schema.org', ...org, address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' } }
      : null
  return { title, description: p.description, keywords: p.keywords, url, image, type: p.blog ? 'article' : 'website', publishedTime: p.blog?.datePublished, jsonLd }
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** The <head> tags for a page. Every tag carries data-seo so the app can swap them on navigation. */
export function renderHead(seo) {
  const meta = (attr, key, value) => value ? `<meta data-seo ${attr}="${key}" content="${esc(value)}"/>` : ''
  return [
    `<title data-seo>${esc(seo.title)}</title>`,
    meta('name', 'description', seo.description),
    meta('name', 'keywords', seo.keywords),
    meta('name', 'author', SITE_NAME),
    meta('name', 'robots', 'index, follow'),
    `<link data-seo rel="canonical" href="${esc(seo.url)}"/>`,
    meta('property', 'og:type', seo.type),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:url', seo.url),
    meta('property', 'og:image', seo.image),
    meta('property', 'og:locale', 'en_IN'),
    meta('property', 'article:published_time', seo.publishedTime),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', seo.image),
    seo.jsonLd ? `<script data-seo type="application/ld+json">${JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')}</script>` : '',
  ].filter(Boolean).join('\n  ')
}

/** Swap the current page's tags into <head> (client-side navigation). */
export function applySeo(seo) {
  document.head.querySelectorAll('[data-seo]').forEach(el => el.remove())
  document.head.insertAdjacentHTML('beforeend', renderHead(seo))
}

export function renderSitemap() {
  const urls = ROUTES.map(page => {
    const lastmod = PAGES[page].blog ? `<lastmod>${PAGES[page].blog.datePublished}</lastmod>` : ''
    return `  <url><loc>${esc(abs(PAGES[page].path))}</loc>${lastmod}</url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}
