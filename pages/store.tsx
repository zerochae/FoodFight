import * as S from "Styles/style.store";
import * as C from "Constants/index";
import * as T from "Types/index";

import type { NextPage, GetServerSideProps } from "next";

import Card from "Components/Card/index.Card";
import Head from "next/head";

interface StoreProps {
  stores: T.Stores[];
}

const Store: NextPage<StoreProps> = ({ stores }) => {
  console.log(process.env);

  return (
    <>
      <Head>
        <title>AWESOME FOOD STORE_STORE</title>
      </Head>
      <S.Container>
        <S.CardList>
          {stores.map((store, index) => {
            return <Card key={index} store={store} />;
          })}
        </S.CardList>
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(C.LOCAL_URL);

  const stores = res && (await res.json());
  return {
    props: {
      stores,
    },
  };
};

export default Store;
