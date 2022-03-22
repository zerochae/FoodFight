import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-height: calc(100vh - 50px);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.4;
  }

  img {
    border-radius: 8px;
  }
`;

export const Left = styled.div`
  padding: 100px 0;
`;

export const Right = styled.div``;

export const ImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
`;

export const Item = styled.li``;

export const StyledImage = styled(Image)`
  border-radius: 8px;
`;
