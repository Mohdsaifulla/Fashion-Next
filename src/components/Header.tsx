import { hkdf } from "crypto";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
      </Container>
    </div>
  );
};

export default Header;
