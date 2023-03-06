import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Sidebar(props) {
  const { name } = props;
  return (
    <>
      <h3 className="text-center mt-3">Dashboard</h3>
      <p className="text-center">Welcome back, {name}!</p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Players</Accordion.Header>
          <Accordion.Body>
            <a href="/api/v1/players">Show Players</a>
          </Accordion.Body>
          <Accordion.Body>
            <a href="/api/v1/players">Create Player</a>
          </Accordion.Body>
          <Accordion.Body>
            <a href="/api/v1/players">Edit Player</a>
          </Accordion.Body>
          <Accordion.Body>
            <a href="/api/v1/players">Delete Player</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
