import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: 94px;
  display: flex;
  z-index: 10;
  justify-content: space-around;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const MenuContainer = styled.li`
  padding: 24px;
  font-weight: 600;
  font-size: 18px;
`;

export const Title = styled.span`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 600;
  font-size: 24px;
`;
