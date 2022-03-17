import * as S from "Components/Common/Footer/style.Footer";
import * as C from "Constants/index";

const Footer = () => {
  return (
    <S.Container>
      <S.ItemList>
        {Object.values(C.Footer.CONTENT).map((val) => {
          return <S.Item>{val}</S.Item>;
        })}
      </S.ItemList>
    </S.Container>
  );
};

export default Footer;
