import Link from 'next/link';
import styles from './hero.module.css'

export default function Hero() {
  const locate = '/en'
  const heroMap = {
    '/de': {
      headlineOne: 'Willkommen bei ',
      headlineTwo: 'Logik unserer Zeit',
      subtitleOne: 'Ein Wissensgarten von Marc Chéhab.',
      subtitleTwo: '',
      cta: 'Loslegen'
    },
    '/en': {
      headlineOne: 'Welcome to',
      headlineTwo: 'Logic of our Time',
      subtitleOne: 'A knowledge garden by Marc Chéhab.',
      subtitleTwo: '',
      cta: 'Get Started'
    },
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <span className={styles.head}>
            <span></span>
            <span>
              {heroMap[locate].headlineOne}<br className="max-md:_hidden" />
              {heroMap[locate].headlineTwo}
              <span className={styles.pops}>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
              </span>
            </span>
            <span></span>
          </span>
        </h1>
        <p className={styles.subtitle}>
          {heroMap[locate].subtitleOne}<br className="max-md:_hidden" />
          {heroMap[locate].subtitleTwo}
        </p>
      </div>
    </div>
  )
}
