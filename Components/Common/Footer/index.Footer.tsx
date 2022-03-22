import * as S from "Components/Common/Footer/style.Footer";
import * as C from "Constants/index";

const Footer = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.ItemList>
          {Object.values(C.Footer.CONTENT).map((val, index) => {
            return <S.Item key={index}>{val}</S.Item>;
          })}
        </S.ItemList>
      </S.Inner>
    </S.Container>
  );
};

export default Footer;
