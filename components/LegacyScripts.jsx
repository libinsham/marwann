'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Vendor libraries, loaded once, in dependency order.
const VENDORS = [
  '/assets/vendor/jquery/jquery.min.js',
  '/assets/vendor/popper/popper.min.js',
  '/assets/vendor/bootstrap/bootstrap.min.js',
  '/assets/vendor/swiper/swiper-bundle.min.js',
  '/assets/vendor/aos/aos.js',
  '/assets/vendor/fancybox/fancybox.umd.js',
  '/assets/vendor/counter/purecounter.js',
]

function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script')
    el.src = src
    el.async = false
    if (id) el.id = id
    el.onload = resolve
    el.onerror = reject
    document.body.appendChild(el)
  })
}

let vendorsPromise
function loadVendors() {
  if (!vendorsPromise) {
    vendorsPromise = VENDORS.reduce((p, src) => p.then(() => loadScript(src)), Promise.resolve())
  }
  return vendorsPromise
}

/**
 * Loads the original template JS (jQuery, Swiper, AOS, Fancybox, PureCounter and
 * assets/js/script.js) and re-initialises it after every client-side navigation,
 * because script.js binds its handlers to whatever DOM exists when it runs.
 */
export default function LegacyScripts() {
  const pathname = usePathname()

  useEffect(() => {
    let cancelled = false

    loadVendors().then(() => {
      if (cancelled) return
      const $ = window.jQuery

      // Remove handlers bound by the previous run so they don't stack up.
      try {
        $('*').off()
        $(window).off('scroll resize')
        if (window.Fancybox) {
          window.Fancybox.close(true)
          window.Fancybox.unbind('[data-fancybox]')
        }
      } catch (e) {}

      document.getElementById('legacy-main-script')?.remove()
      const el = document.createElement('script')
      el.id = 'legacy-main-script'
      el.src = '/assets/js/script.js?t=' + Date.now()
      el.onload = () => {
        // script.js only hides the preloader on window "load", which has
        // already fired by the time this runs.
        $('#preloader').stop(true, true).delay(350).fadeOut('slow')
        document.body.style.overflow = 'visible'
        window.AOS && window.AOS.refresh()
      }
      document.body.appendChild(el)
    })

    return () => {
      cancelled = true
    }
  }, [pathname])

  return null
}
