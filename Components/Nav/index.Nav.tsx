import * as S from "Components/Nav/style.Nav";
import * as C from "Constants/index";
import Link from "next/link";

const Nav = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>{C.Nav.TITLE}</S.Title>
      <S.MenuList>
        {Object.keys(C.Nav.MENU).map((key, index) => {
          return <Menu key={index} content={key} link={C.Nav.MENU[key]} />;
        })}
      </S.MenuList>
    </S.Container>
  );
};

interface MenuProps {
  content: string;
  link: string;
}

const Menu = ({ content, link }: MenuProps): JSX.Element => {
  return (
    <S.MenuContainer>
      <Link href={`/${link}`}>
        <a>{content}</a>
      </Link>
    </S.MenuContainer>
  );
};

export default Nav;
