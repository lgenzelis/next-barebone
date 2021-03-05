import Head from 'next/head'
import { useTranslation } from 'next-i18next'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t`head`}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <h2>
        {t`head`}
        <hr />
      </h2>
      <h1>{title}</h1>
    </>
  )
}
