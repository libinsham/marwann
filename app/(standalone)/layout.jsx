export const metadata = {
  icons: { icon: '/assets/img/logo/favicon.webp' },
}

// Separate root layout: the inauguration page is a standalone document that
// does not use the site's Bootstrap/main.css or header/footer.
export default function StandaloneLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
