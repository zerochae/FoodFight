import * as S from "Components/Button/style.Button";

interface ButtonProps {
  handleIsOpen: () => void;
}

const Button = ({ handleIsOpen }: ButtonProps): JSX.Element => {
  return <S.Container onClick={handleIsOpen}>X</S.Container>;
};

export default Button;
