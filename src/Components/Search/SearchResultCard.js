/* eslint-disable react/prop-types */

import styles from './Search.css';

export default function SearchResultCard({
  character,
  infiniteScrollRef
}) {
  return (
    <div 
      className={styles.SearchResultCard} 
      ref={infiniteScrollRef}
      key={character.id}
    >
      <h1>{character.name}</h1>
      <p>{character.gender}</p>
      <p>{character.race}</p>
    </div>
  );
}
