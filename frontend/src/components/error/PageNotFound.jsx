import React from "react";
import { Container, Alert } from "reactstrap";
import { FaFrownOpen } from "react-icons/fa";

class PageNotFound extends React.Component {
  render() {
    return (
      <Container style={{ paddingTop: "2%" }}>
        <Alert color="danger" style={{ padding: "10%", textAlign: "center" }}>
          <h1>
            404 <FaFrownOpen />
          </h1>
          <h2>Page Not Found</h2>
        </Alert>
      </Container>
    );
  }
}

export default PageNotFound;
