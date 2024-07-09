import React from 'react';
import styles from './GenreBreakdown.module.css';

function GenreBreakdown({ genres }) {
  return (
    <div className={styles.genreBreakdown}>
      <h2 className={styles.title}>Your Genre Breakdown</h2>
      <ul className={styles.list}>
        {genres && Object.entries(genres).map(([genre, percentage]) => (
          <li key={genre} className={styles.listItem}>
            <span>{genre}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreBreakdown;