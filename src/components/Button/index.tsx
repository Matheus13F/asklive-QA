import { ReactElement, ButtonHTMLAttributes } from 'react';

import { ContainerButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

function Button({
  isOutlined = false,
  ...props
}: ButtonProps): ReactElement {
  return (
    <ContainerButton>
      <button className={`${isOutlined ? 'outlined' : ''}`} {...props}></button>
    </ContainerButton>
  );
}

export default Button;