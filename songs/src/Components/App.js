import React from "react";
import { Container, Row, Col } from "reactstrap";
import SongList from "./SongList";
import SongDetail from "./SongDetails";

const App = () => {
  return (
    <div className="App">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h1 className="text-center text-info">Select a Song</h1>
            <SongList />
          </Col>
          <Col md={6}>
            <h1 className="text-center text-primary"> Song Detail</h1>
            <SongDetail />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
