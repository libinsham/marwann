import './admin.css'

export const metadata = {
  title: 'Admin · MARWANN CHARITABLE TRUST',
  robots: { index: false, follow: false },
}

// Separate root layout: the admin area does not load the public site's CSS/JS.
export default function AdminRootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
