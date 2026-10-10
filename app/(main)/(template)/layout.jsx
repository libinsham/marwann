import TemplateHeader from '@/components/template/TemplateHeader'
import TemplateFooter from '@/components/template/TemplateFooter'

export default function TemplateLayout({ children }) {
  return (
    <>
      <TemplateHeader />
      {children}
      <TemplateFooter />
    </>
  )
}
