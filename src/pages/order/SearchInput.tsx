import styled from 'styled-components';

const SearchInput = styled.input`
  height: 3.5rem;
  width: 100%;
  max-width: 26.5rem;

  font-size: 1.5rem;

  background-color: #f4f4f4;

  border: none;
  border-radius: 5px;

  padding: 1.25rem;
  margin-top: 1.5rem;

  &::placeholder {
    color: #989898;
  }
`;

export default SearchInput;
