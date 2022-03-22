import * as S from "pages/About/style.About";
import * as C from "Constants/index";

import Image from "next/image";

import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.Left>
          <h1>{C.About.CONTENT.TITLE}</h1>
          <h3>{C.About.CONTENT.EN}</h3>
          <p>{C.About.CONTENT.DESCRIPTION}</p>
        </S.Left>
        <S.Right>
          <Image src={C.About.IMAGE_MAIN} width={380} height={380} />
        </S.Right>
      </S.Inner>
      <S.ImageList>
        {C.About.IMAGE_URL.map((url) => {
          return (
            <S.Item>
              <S.StyledImage src={url} width={179.19} height={179.19} />
            </S.Item>
          );
        })}
      </S.ImageList>
    </S.Container>
  );
};

export default About;
