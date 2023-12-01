import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand href="#home">Toolkit</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="gap-4 justify-content-end">
          <NavLink to={'/sayac'}>Sayaç</NavLink>
          <NavLink to={'/'}>CRUD</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
