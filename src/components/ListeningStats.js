import React from 'react';
import styles from './ListeningStats.module.css';

function ListeningStats({ totalMinutes, topGenre }) {
  return (
    <div className={styles.listeningStats}>
      <h2 className={styles.title}>Your Listening Stats</h2>
      {totalMinutes && <p className={styles.stat}>Total Minutes: {totalMinutes}</p>}
      {topGenre && <p className={styles.stat}>Top Genre: {topGenre}</p>}
    </div>
  );
}

export default ListeningStats;