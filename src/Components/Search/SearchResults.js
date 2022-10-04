/* eslint-disable react/prop-types */
import SearchResultCard from './SearchResultCard.js';
import styles from './Search.css';

export default function SearchResults({
  data,
  infiniteScrollRef,
}) {
  return (
    <ul className={styles.SearchResults}>
      {data.map((result, i) => {
        const ref =
          i == data.length - 3 ? infiniteScrollRef : undefined;
        return (
          <SearchResultCard
            key={result.id}
            character={result}
            infiniteScrollRef={ref}
          />
        );
      })}
    </ul>
  );
}
