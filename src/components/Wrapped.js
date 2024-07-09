import React, { useState, useEffect } from 'react';
import Header from './Header';
import TopArtists from './TopArtists';
import TopSongs from './TopSongs';
import ListeningStats from './ListeningStats';
import GenreBreakdown from './GenreBreakdown';
import styles from './Wrapped.module.css';

function Wrapped({ data }) {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    { Component: Header, props: {} },
    { Component: TopArtists, props: { artists: data.topArtists } },
    { Component: TopSongs, props: { songs: data.topSongs } },
    { Component: ListeningStats, props: { totalMinutes: data.totalMinutes, topGenre: data.topGenre } },
    { Component: GenreBreakdown, props: { genres: data.genres } },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentSection]);

  return (
    <div className={styles.wrapped}>
      {sections.slice(0, currentSection + 1).map(({ Component, props }, index) => (
        <Component key={index} {...props} />
      ))}
    </div>
  );
}

export default Wrapped;