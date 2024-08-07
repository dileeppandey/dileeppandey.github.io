import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Dileep Pandey'
export const siteTitle = "Dileep Pandey's Blog"

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dileep Pandey's Portfolio Website"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />

            <h1 className={utilStyles.heading2Xl}>
              {name}
            </h1>
            <span className="reachMe">
              <Link href="https://www.linkedin.com/in/dileep-pandey/">
                <Image
                  priority
                  src="/images/linkedin_circle_logo.png"
                  className={utilStyles.borderCircle + utilStyles.mLeft}
                  height={50}
                  width={50}
                  alt={name}
                />
              </Link>
              <Link href="https://github.com/dileeppandey/">
                <Image
                  priority
                  src="/images/github.png"
                  className={utilStyles.borderCircle + utilStyles.mLeft}
                  height={50}
                  width={60}
                  alt={name}
                />
              </Link>
              <Link href="https://www.instagram.com/theleapnext/">
                <Image
                  priority
                  src="/images/insta.png"
                  className={utilStyles.borderCircle + utilStyles.fit + utilStyles.mLeft}
                  height={50}
                  width={50}
                  alt={name}
                />
              </Link>
            </span>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpeg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>{name}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer>
        <hr />
        <div>Copyright © Dileep Pandey, 2023</div>
      </footer>
    </div>
  )
}
