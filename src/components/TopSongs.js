import React from 'react';
import styles from './TopSongs.module.css';

function TopSongs({ songs }) {
  return (
    <div className={styles.topSongs}>
      <h2 className={styles.title}>Your Top Songs</h2>
      <ul className={styles.list}>
        {songs && songs.map((song, index) => (
          <li key={index} className={styles.listItem}>{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopSongs;