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
  overflow: hidden;
`;

export const Left = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Right = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 80px;
  display: flex;
  box-sizing: border-box;
`;

export const RightInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  font-size: 34px;
  font-weight: 600;
`;

export const Body = styled.div`
  white-space: pre-wrap;
`;

export const Description = styled.div`
  font-size: 16px;
`;

export const Url = styled.div`
  margin-top: 90px;
`;
