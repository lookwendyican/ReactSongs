import React from "react";
import { Container, Row, Col } from "reactstrap";
import SongList from "./SongList";

const App = () => {
  return (
    <div className="App">
      <Container className="mt-5">
        <Row>
          <Col>
            <SongList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
