import { Container, Quantity, Texts, Title } from "./styles";
import Bag from "@/components/svg/bag.svg";

const Cart = () => {
  return (
    <Container href="/checkout">
      <Texts>
        <Title>Meu Carrinho</Title>
        <Quantity>0 itens</Quantity>
      </Texts>
      <Bag />
    </Container>
  );
};

export default Cart;
