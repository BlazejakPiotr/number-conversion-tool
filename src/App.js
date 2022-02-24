import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";

function App() {
  const [number, setNumber] = useState();
  const [words, setWords] = useState();

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Row className="App d-flex justify-content-center">
          <Col md={12} lg={6}>
            <h1 className="text-center mb-5">Number conversion tool</h1>

            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="number"
                className="text-start"
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ gap: "12px" }}
                >
                  <Col xs={8} sm={9}>
                    <Form.Label>Enter a number:</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="1505"
                      value={number}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col className="d-flex justify-content-end align-items-end">
                    <Button
                      type="submit"
                      variant="danger"
                      className="text-white w-100"
                    >
                      Convert
                    </Button>
                  </Col>
                </div>
              </Form.Group>
            </Form>
            <div className="text-start mt-5" style={{ minHeight: "75px" }}>
              {words && (
                <>
                  <p style={{ marginBottom: "8px" }}>Result:</p>
                  <h4>{words}</h4>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
