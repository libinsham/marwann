import LegacyScripts from '@/components/LegacyScripts'

export const metadata = {
  title: 'MARWANN CHARITABLE TRUST — Empowering Communities, Transforming Lives',
  icons: { icon: '/assets/img/logo/favicon.webp' },
}

const FONTS =
  'https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&display=swap'

const STYLESHEETS = [
  '/assets/vendor/animate/animate.min.css',
  '/assets/vendor/fontawesome-pro/fontawesome.min.css',
  '/assets/vendor/bootstrap/bootstrap.min.css',
  '/assets/vendor/swiper/swiper-bundle.min.css',
  '/assets/vendor/aos/aos.css',
  '/assets/vendor/fancybox/fancybox.css',
  '/assets/css/spacing.css',
  '/assets/css/main.css',
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link href={FONTS} rel="stylesheet" />
        {STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        {/* preloader (hidden by LegacyScripts once the template JS is ready) */}
        <div id="preloader">
          <div className="preloader">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/logo/logo-2.png"
              alt="MARWANN CHARITABLE TRUST"
              style={{ width: 300, height: 'auto' }}
            />
          </div>
        </div>
        {children}
        <LegacyScripts />
      </body>
    </html>
  )
}
