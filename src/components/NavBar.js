import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Button,
  Container,
  Form,
  FormControl
} from "react-bootstrap";

export const NavBar = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Container fluid>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Child Component</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline onChange={(e) => setSearchText(e.target.value)}>
          <FormControl
            type="text"
            placeholder="whatith you seek?"
            className="mr-sm-2"
          />
          <Button
            onClick={() => props.triggerShowSearchResults(searchText)}
            variant="outline-primary"
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </Container>
  );
};
