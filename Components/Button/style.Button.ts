import styled from "styled-components";

export const Container = styled.button`
  background: #ffffff;
  border-radius: 4px;
  position: absolute;
  top: 16px;
  right: 16px;
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
  z-index: 1;
  border: none;
  font-size: 16px;
  font-weight: 600;

  &:hover{
    background-color: #000;
    transition: 0.5s;
    color: #fff;
  }
`;
