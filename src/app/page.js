import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>
        <Image
          src="/img/amourpigalle02.png"
          alt="Logo Amour Pigalle"
          width={1200}
          height={800}
          className={styles.logo}
          priority
        />
      </h1>
    </main>
  );
}
