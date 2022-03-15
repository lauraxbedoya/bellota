import { StyledMainButton } from "../styles/styles/styled_components";

type ButtonType = {
  onClick: () => any,
  text: string,
  disabled: boolean
};

const Button = ({ onClick, text, disabled }: ButtonType) => {
  return(
    <StyledMainButton
      onClick={onClick}
      disabled={disabled}
    >{text}</StyledMainButton>
  );
};

export default Button;