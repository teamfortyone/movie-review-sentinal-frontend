import Head from 'next/head';

import Main from '../components/Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sentiment Analysis on Movie Reviews</title>
      </Head>
      <header className="flex justify-center">
        <span className="p-4 text-3xl">
          Sentiment Analysis on Movie Reviews
        </span>
      </header>
      <Main />
      <footer className="absolute bottom-4 flex flex-row gap-2 items-center w-full justify-center pt-3">
        Powered by{' '}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/nextjs.svg"
            alt="Next.js Logo"
            className={styles.nextjsLogo}
          />
        </a>
        and
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/tailwindcss.svg"
            alt="Tailwind CSS Logo"
            className={styles.tailwindLogo}
          />
        </a>
      </footer>
    </div>
  );
}
