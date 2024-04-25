import Cart from "./Cart";
import { Container, Logo } from "./styles";


const Header = () => {
  return (
    <Container >
      <Logo href="/">
        WeMovies
      </Logo>
      <Cart />
    </Container>
   );
}
 
export default Header;