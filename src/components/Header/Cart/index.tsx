import { cookies } from "next/headers";
import Bag from "@/components/svg/bag.svg";
import { Container, Quantity, Texts, Title } from "./styles";

const Cart = () => {
  const cookieCart = cookies().get("product")?.value;
  const cart: productType[] = cookieCart ? JSON.parse(cookieCart) : null;
    console.log(cart)
  const totalItems = 0;

  return (
    <Container href="/checkout">
      <Texts>
        <Title>Meu Carrinho</Title>
        <Quantity>{totalItems} itens</Quantity>
      </Texts>
      <Bag />
    </Container>
  );
};

export default Cart;
