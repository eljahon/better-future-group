import Image from 'next/image'
import { useTranslation } from '../i18n'
import { languages, fallbackLng } from '../i18n/settings'
import Homepage from '@/page/home'

async function getData() {
try{
  // let params ={
  //   populate: '*'
  // }
  // let query = Object.keys(params)
  //     .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
  //     .join('&');
  const res = await fetch(`https://api.betterfuture.uz/api/all`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
} catch(err) {
  console.log(err)
}
}

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const data = await getData()
  console.log(data, '=====>> all data')
  return (
    <>
      <Homepage data={data} lng={lng} />
    </>

  )
}
