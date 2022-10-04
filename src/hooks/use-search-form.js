import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const usableSearchParams = Object.fromEntries(
    searchParams.entries()
  );
  const [name, setName] = useState(usableSearchParams.name || '');
  const [race, setRace] = useState(usableSearchParams.type_1 || '');
  return {
    name,
    searchForm: usableSearchParams,
    setName,
    setSearchForm: setSearchParams,
    race, 
    setRace,
  };
}
