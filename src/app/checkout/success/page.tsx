import Image from "next/image";
import { ButtonLink, Imgcontainer, SuccessContainer, Title } from "./styles";
import Link from "next/link";

export default function Home() {
  return (
    <SuccessContainer>
      <Title>Compra realizada com sucesso!</Title>
      <Imgcontainer>
        <Image src="/assets/buy-success.png" alt="img" fill />
      </Imgcontainer>
      <Link href="/">
        <ButtonLink>VOLTAR</ButtonLink>
      </Link>
    </SuccessContainer>
  );
}
