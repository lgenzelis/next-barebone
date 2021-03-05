import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useEffect, useState } from 'react'

const Homepage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const [nMsgs, setNMsgs] = useState(0)
  const user = 'Lucas'

  useEffect(() => {
    const intervalId = setInterval(() => setNMsgs(n => (n+1)%5), 1500)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <main>
        <Header title={t('h1')} />
        <h3>{t`interpolation-and-plurals`}</h3>
        <span>
          <Trans t={t} i18nKey="hello" count={nMsgs}>
            Hello <strong>{{user}}</strong>!
            You have {{nMsgs}} unread message
          </Trans>
        </span>
        <div>
          <Link
            href='/'
            locale={router.locale === 'en' ? 'es' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage
