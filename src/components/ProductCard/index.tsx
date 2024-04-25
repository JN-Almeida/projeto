import Image from "next/image";
import Button from "@/components/Button";
import { Container, ProductPrice, ProductTitle, QuantOnCart } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";


const ProductCard = ({ id, title, price, image }: productType) => {
  return (
    <Container>
      <Image
        src={image}
        width={147}
        height={188}
        alt="img"
      />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <Button>
        <QuantOnCart>
          <MdAddShoppingCart size={15} />0
        </QuantOnCart>
        ADICIONAR AO CARRINHO
      </Button>
    </Container>
  );
};

export default ProductCard;
