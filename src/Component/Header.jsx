import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <Navbar className="bg-dark d-flex justify-content-between header-tag position-fixed w-100">
          <Navbar.Brand href="#home" className="d-flex">
            <Container>
              <span className="text-primary">
                <i class="bi bi-list"></i>
              </span>
            </Container>
            <Form inline className="w-100 bg-dark text-light">
              <InputGroup className="bg-black">
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-dark text-light"
                >
                  <span>
                    <i class="bi bi-search"></i>
                  </span>

                  <input
                    type="search"
                    placeholder="search"
                    className="bg-dark text-light input-tag"
                  />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Navbar.Brand>

          <Navbar.Brand className="d-flex">
            <Container className="text-light header-icon">
              <span>
                <i class="bi bi-gear"></i>
              </span>
            </Container>
            <Container className="text-light header-icon">
              <span>
                <i class="bi bi-envelope-fill"></i>
              </span>
            </Container>
            <Container className="text-light header-icon">
              <span>
                <i class="bi bi-bell-fill"></i>
              </span>
            </Container>
          </Navbar.Brand>
        </Navbar>
        <br />
      </header>
    </>
  );
}

export default Header;
