import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { search } from '../services/characters';
import { useInView } from 'react-intersection-observer';

export default function useSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const usableSearchParams = Object.fromEntries(
    searchParams.entries()
  );

  const nextPage = async () => {
    usableSearchParams.page = parseInt(usableSearchParams.page) + 1;
    setSearchParams(usableSearchParams);
    const moreResults = await search(usableSearchParams);
    setSearchResults(searchResults.concat(moreResults.data));
  };

  const infiniteScrollRef = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) nextPage();
    },
  }).ref;


  const searchZeldex = async (searchObj) => {
    if (searchObj.page == null) {
      searchObj.page = 1;
    }
    setSearchParams(searchObj);
    try {
      const body = await search(searchObj);
      setSearchResults(body.data);
    } catch (e) {
      setError('Error searching Zeldex ' + e.body);
    }
  };
  useEffect(() => void searchZeldex(usableSearchParams), []);

  //new function
  const searchZeldexWithParam = async (searchObj) => {
    setSearchParams(searchObj);
    try {
      const body = await search(searchObj);
      setSearchResults(body.data);
    } catch (e) {
      setError('Error searching Zeldex ' + e.body);
    }
  };

  return {
    nextPage,
    searchParams,
    searchResults,
    setSearchResults,
    searchZeldex,
    searchZeldexWithParam,
    infiniteScrollRef,
  };
}
