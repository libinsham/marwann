
'use client'

import { useEffect, useRef } from 'react'

/**
 * Runs a page's original inline script after its markup mounts.
 */
export default function PageScript({ code }) {
  const ran = useRef(false)

  useEffect(() => {
    if (ran.current) return
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
