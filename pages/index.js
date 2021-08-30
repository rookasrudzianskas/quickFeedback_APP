import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useAuth} from "../lib/auth";

export default function Home() {

    const auth = useAuth();

  return (
    <div className='container'>
      <Head>
        <title>Quick Feedback app</title>
        <meta name="description" content="This is quick feedback, take feedback or get nothing!" />
        <link rel="icon" href="/assets/LOGO.png" />
      </Head>

      <main className={styles.main}>
            <h1 className="title">Quick Feedback</h1>

          <p className='description'>
              Current user: <code>{auth.user ? auth.user.email : "There is no user currently on 🔥"}</code>
          </p>
          <div>
              {auth?.user?.email}
          </div>
          {auth.user ? (
              <button onClick={(e) => auth.signout()}>Sign Out</button>
          ) : (
              <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
          )}
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
