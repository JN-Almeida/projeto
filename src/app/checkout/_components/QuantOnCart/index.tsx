import Plus from "@/components/svg/plus.svg";
import Minus from "@/components/svg/minus.svg";
import { ActionButton, Container, InputQuant } from "./styles";

const QuantOnCart = () => {
  return (
    <Container>
      <ActionButton>
        <Minus />
      </ActionButton>
      <InputQuant type="number" />
      <ActionButton>
        <Plus />
      </ActionButton>
    </Container>
  );
};

export default QuantOnCart;
