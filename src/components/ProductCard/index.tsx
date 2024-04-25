"use client";
import { useContext } from "react";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import Button from "@/components/Button";
import { CartContext } from "@/context/cart";
import { Container, ProductPrice, ProductTitle, QuantOnCart } from "./styles";

const ProductCard = ({ id, title, price, image }: productType) => {
  const { addItemOnCart, cart } = useContext(CartContext);

  const itemInCart = cart.find((item: productType) => item.id === id);
  const quantityInCart = itemInCart ? itemInCart.qtd : 0;

  return (
    <Container>
      <Image src={image} width={147} height={188} alt="img" />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <Button onClick={() => addItemOnCart({ id, title, price, image })}>
        <QuantOnCart>
          <MdAddShoppingCart size={15} /> {quantityInCart}
        </QuantOnCart>
        ADICIONAR AO CARRINHO
      </Button>
    </Container>
  );
};

export default ProductCard;
