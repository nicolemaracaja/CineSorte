'use client';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={`${styles.small}`}>&copy; {new Date().getFullYear()} CineSorte. Todos os direitos reservados.</p>
        <p className={`${styles.xsmall} mt-2`}>
          Desenvolvido por Nicole Maracajá com React + TMDB.
        </p>
      </div>
    </footer>
  );
}
