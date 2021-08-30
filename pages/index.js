import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useAuth} from "../lib/auth";

export default function Home() {

    const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Feedback app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/LOGO.png" />
      </Head>

      <main className={styles.main}>
            <h1>Quick Feedback</h1>

          <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
          <div>
              {auth?.user}
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/assets/LOGO/1x/Artboard 3.png" alt="Vercel Logo" width={72} height={16} objectFit={'cover'} />
          </span>
        </a>
      </footer>
    </div>
  )
}
