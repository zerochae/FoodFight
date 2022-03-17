import * as S from "Styles/index";

import Head from "next/head";

import type { NextPage } from "next";

interface HomeProps {}

const Home: NextPage = ({}: HomeProps) => {
  return (
    <S.Container>
      <Head>
        <title>Food Fight</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </S.Container>
  );
};

export default Home;
