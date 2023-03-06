import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Sidebar from "./layouts/sidebar";
import CreatePlayerForm from "./components/forms/createPlayer";
import SearchPlayerForm from "./components/forms/searchPlayer";

function App() {
  return (
    <Row>
      <Col md lg="2">
        <Container>
          <Sidebar name="Binar Admin" />
        </Container>
      </Col>
      <Col>
        <Container>
          <div className="App">
            <section className="content">
              <div className="container p-5 input-form">
                <h2>Create/Edit Player</h2>
                <CreatePlayerForm />
              </div>
              <div className="container p-5 input-form">
                <h2>Search Player</h2>
                <SearchPlayerForm />
              </div>
            </section>
          </div>
        </Container>
      </Col>
    </Row>
  );
}

export default App;
