import React from 'react';
import styles from './TopArtists.module.css';

function TopArtists({ artists }) {
  return (
    <div className={styles.topArtists}>
      <h2 className={styles.title}>Your Top Artists</h2>
      <ul className={styles.list}>
        {artists && artists.map((artist, index) => (
          <li key={index} className={styles.listItem}>{artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopArtists;