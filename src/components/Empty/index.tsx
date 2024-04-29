import Image from "next/image";
import { ButtonLink, Container, Line, Title } from "./styles";
import Button from "@/components/Button";

const Empty = () => {
  return (
    <Container>
      <Title>Parece que não há nada por aqui :(</Title>
      <Image src="/assets/empty.png" width={179} height={264} alt="empty" />
      <Line />
      <ButtonLink href="/">
        <Button>Recarregar página</Button>
      </ButtonLink>
    </Container>
  );
};

export default Empty;
