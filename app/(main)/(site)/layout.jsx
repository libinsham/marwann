import SiteHeader from '@/components/site/SiteHeader'
import SiteFooter from '@/components/site/SiteFooter'
import { getSettings } from '@/lib/store'

export default async function SiteLayout({ children }) {
  const settings = await getSettings()

  return (
    <>
      <link rel="stylesheet" href="/assets/css/main.css" />
      <link rel="stylesheet" href="/assets/css/spacing.css" />
      <link rel="stylesheet" href="/assets/css/marwann-india-map.css" />
 <link rel="stylesheet" href="/assets/css/marwann-reach-trust-details.css" />
      

      <SiteHeader
        topText={settings.topText}
        settings={settings}
      />

      {children}

      <SiteFooter />
    </>
  )
}