/* ============================================
   121212.events — script.js
   ============================================ */

/* ── Scroll Progress ── */
;(function () {
  const bar = document.getElementById('scrollProgress')
  if (!bar) return
  window.addEventListener('scroll', () => {
    const doc = document.documentElement
    const scrollTop = doc.scrollTop || document.body.scrollTop
    const scrollHeight = doc.scrollHeight - doc.clientHeight
    bar.style.width = scrollHeight > 0 ? (scrollTop / scrollHeight * 100) + '%' : '0'
  }, { passive: true })
})()

/* ── Nav Scroll ── */
;(function () {
  const nav = document.getElementById('mainNav')
  if (!nav) return
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20)
  }, { passive: true })
})()

/* ── Hamburger ── */
;(function () {
  const btn   = document.getElementById('hamburger')
  const links = document.getElementById('navLinks')
  if (!btn || !links) return
  btn.addEventListener('click', () => links.classList.toggle('open'))
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) links.classList.remove('open')
  })
})()

/* ── Stat Counters ── */
;(function () {
  const items = document.querySelectorAll('.stat-number[data-target]')
  if (!items.length) return
  const fmt = (n) => n >= 1000 ? (n / 1000).toFixed(0) + 'K+' : n.toString() + '+'
  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10)
    const start  = performance.now()
    const step   = (now) => {
      const p    = Math.min((now - start) / 1800, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      el.textContent = fmt(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = 'true'
        animate(e.target)
      }
    })
  }, { threshold: 0.4 })
  items.forEach((el) => obs.observe(el))
})()

/* ── Events Browse Filters ── */
;(function () {
  const grid    = document.getElementById('eventsGrid')
  const countEl = document.getElementById('eventCount')
  const noRes   = document.getElementById('noResults')
  if (!grid) return

  let activeCity = 'all'
  let activeCat  = 'all'
  let activePrice = 'all'

  function applyFilters() {
    const cards   = grid.querySelectorAll('.event-card[data-city]')
    let visible   = 0
    cards.forEach((card) => {
      const cityMatch  = activeCity  === 'all' || card.dataset.city  === activeCity
      const catMatch   = activeCat   === 'all' || card.dataset.cat   === activeCat
      const priceMatch = activePrice === 'all' ||
                         (activePrice === 'free' && card.dataset.free === 'true') ||
                         (activePrice === 'paid' && card.dataset.free === 'false')
      const show = cityMatch && catMatch && priceMatch
      card.style.display = show ? '' : 'none'
      if (show) visible++
    })
    if (countEl) countEl.textContent = visible
    if (noRes) noRes.style.display = visible === 0 ? 'block' : 'none'
  }

  document.querySelectorAll('.filter-btn[data-city]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-city]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      activeCity = btn.dataset.city
      applyFilters()
    })
  })

  document.querySelectorAll('.filter-btn[data-cat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-cat]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      activeCat = btn.dataset.cat
      applyFilters()
    })
  })

  document.querySelectorAll('.filter-btn[data-price]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-price]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      activePrice = btn.dataset.price
      applyFilters()
    })
  })

  // Pre-filter from URL params
  const params = new URLSearchParams(window.location.search)
  const cityParam  = params.get('city')
  const catParam   = params.get('cat')
  const priceParam = params.get('price')
  if (cityParam)  { const t = document.querySelector(`.filter-btn[data-city="${cityParam}"]`);  if (t) t.click() }
  if (catParam)   { const t = document.querySelector(`.filter-btn[data-cat="${catParam}"]`);    if (t) t.click() }
  if (priceParam) { const t = document.querySelector(`.filter-btn[data-price="${priceParam}"]`); if (t) t.click() }
})()

/* ── Event Submit Form ── */
;(function () {
  const form = document.getElementById('eventForm')
  if (!form) return
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn  = form.querySelector('button[type="submit"]')
    const orig = btn.textContent
    btn.textContent = 'Submitting...'
    btn.disabled    = true
    setTimeout(() => {
      btn.textContent    = '✓ Event Submitted!'
      btn.style.background = 'var(--green)'
      form.reset()
      setTimeout(() => {
        btn.textContent    = orig
        btn.style.background = ''
        btn.disabled       = false
      }, 4000)
    }, 1200)
  })
})()

/* ── Scroll Reveal ── */
;(function () {
  const style       = document.createElement('style')
  style.textContent = `.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; } .reveal.visible { opacity: 1; transform: translateY(0); }`
  document.head.appendChild(style)
  const targets = document.querySelectorAll('.event-card, .category-card, .city-card, .city-card-sm, .perk-item, .featured-event')
  targets.forEach((el) => el.classList.add('reveal'))
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
    })
  }, { threshold: 0.08 })
  targets.forEach((el) => obs.observe(el))
})()

/* ── Active Nav ── */
;(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach((link) => {
    if (link.getAttribute('href') === path) link.style.color = 'var(--text)'
  })
})()
