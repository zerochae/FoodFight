import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  justify-content: center;
  align-items: center;
  background-color: #00000060;
`;

export const Outer = styled.div`
  padding: 40px;
  height: 100%;
`;

export const Inner = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  max-height: 900px;
  box-shadow: 0 20px 40px 0 #00000020;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
