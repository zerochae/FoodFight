import * as S from "Styles/style.about";
import * as C from "Constants/index";

import Image from "next/image";

import type { NextPage } from "next";

import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>AWESOME FOOD STORE_ABOUT</title>
      </Head>
      <S.Container>
        <S.Inner>
          <S.Left>
            <h1>{C.About.CONTENT.TITLE}</h1>
            <h3>{C.About.CONTENT.EN}</h3>
            <p>{C.About.CONTENT.DESCRIPTION}</p>
          </S.Left>
          <S.Right>
            <Image
              alt={C.About.IMAGE_ALT.MAIN}
              src={C.About.IMAGE_MAIN}
              width={380}
              height={380}
            />
          </S.Right>
        </S.Inner>
        <S.ImageList>
          {C.About.IMAGE_URL.map((url, index) => {
            return (
              <S.Item key={index}>
                <S.StyledImage
                  alt={`${C.About.IMAGE_ALT.IMAGE}${index}`}
                  src={url}
                  width={179.19}
                  height={179.19}
                />
              </S.Item>
            );
          })}
        </S.ImageList>
      </S.Container>
    </>
  );
};

export default About;
