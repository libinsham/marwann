'use client'

import { useEffect, useRef } from 'react'

/**
 * Runs a page's original inline <script> once the page's markup is mounted.
 * The original scripts used `DOMContentLoaded`, which has already fired in a
 * client-side Next.js navigation, so those callbacks are invoked immediately.
 */
export default function PageScript({ code }) {
  const ran = useRef(false)

  useEffect(() => {
    if (ran.current) return // guard against React Strict Mode's double effect in dev
    ran.current = true

    const original = document.addEventListener
    document.addEventListener = function (type, listener, options) {
      if (type === 'DOMContentLoaded') {
        listener.call(document, new Event('DOMContentLoaded'))
        return
      }
      return original.call(this, type, listener, options)
    }
    try {
      new Function(code)()
    } catch (err) {
      console.error('Page script error:', err)
    } finally {
      document.addEventListener = original
    }
  }, [code])

  return null
}
