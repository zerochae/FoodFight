import * as S from "Components/Detail/style.Detail";
import * as T from "Types/index";

import Button from "Components/Button/index.Button";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";

interface DetailProps {
  store: T.Stores;
  handleIsOpen: () => void;
}

const Detail = ({ handleIsOpen, store }: DetailProps) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 1024px;
      margin: 0 auto;
      left:0;
      right:0;
      `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <S.Container>
      <S.Outer>
        <S.Inner>
          <Button handleIsOpen={handleIsOpen} />
          <S.Left>
            <Image
              src={store.image}
              alt={store.name}
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
