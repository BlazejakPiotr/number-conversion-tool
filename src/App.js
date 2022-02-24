import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="d-flex justify-content-center mt-5">
          <Col md={12} lg={6}>
            <h1>Number conversion tool</h1>

            <Form className="mt-5">
              <Form.Group
                className="mb-3"
                controlId="number"
                className="text-start"
              >
                <div className="d-flex justify-content-evenly">
                  <div className="w-75">
                    <Form.Label>Enter a number to convert</Form.Label>
                    <Form.Control type="number" placeholder="Enter number" />
                  </div>
                  <div className="d-flex align-items-end">
                    <Button variant="danger" className="text-white">
                      Convert
                    </Button>
                  </div>
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
