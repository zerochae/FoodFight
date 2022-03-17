import * as S from "Components/Nav/style.Nav";
import * as C from "Constants/index";

const Nav = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>{C.Nav.TITLE}</S.Title>
      <S.MenuList>
        {Object.keys(C.Nav.MENU).map((key, index) => {
          return <Menu key={index} content={key} />;
        })}
      </S.MenuList>
    </S.Container>
  );
};

interface MenuProps {
  content: string;
}

const Menu = ({ content }: MenuProps): JSX.Element => {
  return <S.MenuContainer>{content}</S.MenuContainer>;
};

export default Nav;
