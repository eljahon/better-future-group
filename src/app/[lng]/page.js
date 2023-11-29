import Image from 'next/image'
import { useTranslation } from '../i18n'
import { languages, fallbackLng } from '../i18n/settings'
import Homepage from '@/page/home'

async function getData() {
  const res = await fetch(`${process.env.NEXT_APP_BASE_URL}/all`, { cache: 'no-store' })
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const data = await getData()

  return (
    <>
      <Homepage data={data} lng={lng} />
    </>
 
  )
}
