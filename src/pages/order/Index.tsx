import React from 'react';
import { styled } from 'styled-components';
import useSearch from '../../hooks/useSearch';
import SearchInput from './SearchInput';

const Container = styled.div`
  height: 100vh;
  width: 80vw;

  margin: 0 auto;

  padding-top: 4rem;

  h1 {
    font-weight: 900;
    font-size: 2.25rem;
    color: #181818;

    margin-top: 5rem;
  }
`;

export default function OrderPage() {
  const { searchedValue, handleSearch } = useSearch();

  return (
    <Container>
      <h1>Seja bem vindo!</h1>
      <SearchInput
        placeholder="O que você procura?"
        value={searchedValue}
        onChange={handleSearch}
      />
    </Container>
  );
}
