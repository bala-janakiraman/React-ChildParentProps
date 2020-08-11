import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .colored-center {
    border: solid 2px limegreen;
    text-align: center;
  }
`;

export const SearchResults = (props) => {
  console.log(props.searchQuery);
  return (
    <Styles>
      <Container className="colored-center">
        <h3> You searched for &#39; {props.searchQuery} &#39;</h3>
        <p>
          {" "}
          The answer to all you seek is ....<b>42!</b>
        </p>
      </Container>
    </Styles>
  );
};
