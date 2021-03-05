import Head from 'next/head'
import { useTranslation } from 'next-i18next'

export const Header = ({ title }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t`head`}</title>
      </Head>
      <h2>
        {t`head`}
        <hr/>
      </h2>
      <h1>
        {title}
      </h1>
    </>
  )
}
