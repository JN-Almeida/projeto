import { ButtonDefault } from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  $active?: boolean;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonDefault {...props}>{children}</ButtonDefault>;
};

export default Button;
