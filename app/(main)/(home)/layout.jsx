import SiteHeader from '@/components/site/SiteHeader'
import HomeFooter from '@/components/home/HomeFooter'
import { getSettings } from '@/lib/store'

export default async function HomeLayout({ children }) {
  const settings = await getSettings()
  return (
    <>
      <SiteHeader topText={settings.homeTopText} settings={settings} />
      {children}
      <HomeFooter />
    </>
  )
}
