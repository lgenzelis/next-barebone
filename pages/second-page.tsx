import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { i18n as i18nConfig } from '../next-i18next.config'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const SecondPage = () => {

  const { t } = useTranslation('second-page')

  return (
    <>
      <main>
        <Header title={t('h1')} />
        <Link href='/'>
          <button
            type='button'
          >
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale ?? i18nConfig.defaultLocale, ['common', 'second-page', 'footer']),
  },
})

export default SecondPage
