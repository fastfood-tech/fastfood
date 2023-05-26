import styled from 'styled-components';

const CardContainer = styled.div`
  width: 19rem;
  min-width: 200px;
  min-height: 13rem;

  -webkit-box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
  -moz-box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
  box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);

  background-color: #fff !important;

  border-radius: 20px;

  @media screen and (max-width: 800px) {
    min-height: 10rem;
  }
`;

export default CardContainer;
