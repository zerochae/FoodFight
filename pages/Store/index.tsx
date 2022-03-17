import * as S from "pages/Store/style.Store";
import * as C from "Constants/index";
import * as T from "Types/index";

import type { NextPage, GetServerSideProps } from "next";

import Card from "Components/Card/index.Card";

interface StoreProps {
  stores: T.Stores[];
}

const Store: NextPage<StoreProps> = ({ stores }) => {
  return (
    <S.Container>
      <S.CardList>
        {stores.map((store, index) => {
          return <Card key={index} store={store} />;
        })}
      </S.CardList>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(C.Store.URL);
  const stores = await res.json();

  return {
    props: {
      stores,
    },
  };
};

export default Store;
