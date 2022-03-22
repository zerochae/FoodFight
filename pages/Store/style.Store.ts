import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 50px);
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
`;
