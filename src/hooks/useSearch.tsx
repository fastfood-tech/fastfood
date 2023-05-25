import { useState, ChangeEvent } from 'react';

export default function useSearch() {
  const [searchedValue, setSearchedValue] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value.trim());
  };

  return { searchedValue, handleSearch };
}
