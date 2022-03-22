import * as S from "Components/Card/style.Card";
import * as T from "Types/index";

import { useState } from "react";
import Detail from "Components/Detail/index.Detail";

interface CardProps {
  store: T.Stores;
}

const Card = ({ store }: CardProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.Inner>
        <S.StyledImage
          src={store.thumb}
          width={179.19}
          height={179.19}
          onClick={() => {
            handleIsOpen();
          }}
        />
      </S.Inner>
      {isOpen && <Detail handleIsOpen={handleIsOpen} store={store} />}
    </S.Container>
  );
};

export default Card;
