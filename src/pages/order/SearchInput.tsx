import styled from 'styled-components';

const SearchInput = styled.input`
  height: 3rem;
  width: 100%;
  max-width: 20rem;

  font-size: 1rem;

  background-color: #f4f4f4;

  border: none;
  border-radius: 5px;

  padding: 1.25rem;
  margin-top: 1rem;

  &::placeholder {
    color: #989898;
  }
`;

export default SearchInput;
