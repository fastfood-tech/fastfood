import React from 'react';
import styled from 'styled-components';
import useSearch from '../../hooks/useSearch';
import SearchInput from './SearchInput';
import Categories from './productCategories/Categories';
import useCategoryHandler from '../../hooks/useCategoryHandler';
import SectionContainer from '../../componets/SectionContainer';

const Container = styled.div`
  height: 100vh;
  width: 80vw;

  margin: 0 auto;

  padding-top: 4rem;

  & > h1 {
    font-weight: 700;
    font-size: 2.25rem;
    color: #181818;

    margin-top: 5rem;
  }
`;

export default function OrderPage() {
  const { searchedValue, handleSearch } = useSearch();
  const categoryHandler = useCategoryHandler();

  return (
    <Container>
      <h1>Seja bem vindo!</h1>
      <SearchInput
        placeholder="O que você procura?"
        value={searchedValue}
        onChange={handleSearch}
      />
      <SectionContainer title="Categorias" subTitle="Navegue por categoria">
        <Categories
          style={{ marginTop: '3rem' }}
          categoryHandler={categoryHandler}
        />
      </SectionContainer>
    </Container>
  );
}
