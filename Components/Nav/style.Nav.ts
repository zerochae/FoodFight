import styled from "styled-components";

export const Container = styled.div`
  height: 94px;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  top: 0;
  width: 1024px;
  z-index: 100;
  background: #fff;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;

export const Inner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
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
  cursor: pointer;
`;

export const Title = styled.span`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 600;
  font-size: 24px;
`;
