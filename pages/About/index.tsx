import * as S from "pages/About/style.About";
import * as C from "Constants/index";
import Image from "next/image";

import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <S.Container>
      <S.Left>
        <h1>{C.About.CONTENT.TITLE}</h1>
        <h3>{C.About.CONTENT.EN}</h3>
        <p>
          {C.About.CONTENT.DESCRIPTION} <br /> {C.About.CONTENT.DESCRIPTION2}
        </p>
      </S.Left>
      <S.Right>
        <Image src={C.About.CONTENT.IMG} width={580} height={380} />
      </S.Right>
    </S.Container>
  );
};

export default About;
