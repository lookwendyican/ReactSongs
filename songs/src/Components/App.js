import React from "react";
import { Container, Row, Col } from "reactstrap";
import SongList from "./SongList";

const App = () => {
  return (
    <div className="App">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h1 className="text-center text-info">Select a Song!</h1>
            <SongList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
