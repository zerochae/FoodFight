import * as S from "Components/Detail/style.Detail";
import * as T from "Types/index";

import Button from "Components/Button/index.Button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface DetailProps {
  store: T.Stores;
  handleIsOpen: () => void;
}

const Detail = ({ handleIsOpen, store }: DetailProps) => {
  return (
    <S.Container>
      <S.Outer>
        <S.Inner>
          <Button handleIsOpen={handleIsOpen} />
          <S.Left>
            <Image
              src={store.image}
              width="100"
              height="98"
              layout="responsive"
            />
          </S.Left>
          <S.Right>
            <S.RightInner>
              <S.Header>
                <h1>{store.name}</h1>
              </S.Header>
              <S.Body>
                <S.Description>
                  <h3>{store.description}</h3>
                </S.Description>
                <S.Url>
                  {store.url && (
                    <Link href={store.url}>
                      <a>{store.url}</a>
                    </Link>
                  )}
                </S.Url>
              </S.Body>
            </S.RightInner>
          </S.Right>
        </S.Inner>
      </S.Outer>
    </S.Container>
  );
};

export default Detail;
