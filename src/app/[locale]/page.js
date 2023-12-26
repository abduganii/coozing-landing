import HomePage from '@/components/page/home'
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/partners-landing?locale=ru`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
const i18nNamespaces = ['home'];
export default async function Home({ params: { locale } }) {
  const data = await getData()
   
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
 
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <HomePage lang={locale} data={data?.data} />
    </TranslationsProvider>
    

  )
}
