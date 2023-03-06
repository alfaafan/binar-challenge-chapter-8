import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const CreatePlayerForm = () => {
  const usernameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const experienceInput = useRef(null);
  const levelInput = useRef(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");

  const createPlayer = (e) => {
    e.preventDefault();
    setStatus("Success creating a player");
    setUsername(`Username: ${usernameInput.current.value}`);
    setEmail(`Email: ${emailInput.current.value}`);
    setPassword(`Password: ${passwordInput.current.value}`);
    setExperience(`Experience: ${experienceInput.current.value}`);
    setLevel(`Level: ${levelInput.current.value}`);
  };

  const editPlayer = (e) => {
    e.preventDefault();
    setStatus("Success updating a player");
    setUsername(`Username: ${usernameInput.current.value}`);
    setEmail(`Email: ${emailInput.current.value}`);
    setPassword(`Password: ${passwordInput.current.value}`);
    setExperience(`Experience: ${experienceInput.current.value}`);
    setLevel(`Level: ${levelInput.current.value}`);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control ref={usernameInput} type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordInput} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicExperience">
          <Form.Label>Experience</Form.Label>
          <Form.Control ref={experienceInput} type="number" placeholder="Experience" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLevel">
          <Form.Label>Level</Form.Label>
          <Form.Control ref={levelInput} type="number" placeholder="Level" />
        </Form.Group>

        <div className="buttons">
          <Button variant="primary" type="submit" onClick={createPlayer}>
            Create
          </Button>
          <Button type="submit" onClick={editPlayer}>
            Edit
          </Button>
        </div>
      </Form>
      <Card>
        <Card.Body>
          <h3>{status}</h3>
          <p>{username}</p>
          <p>{email}</p>
          <p>{password}</p>
          <p>{experience}</p>
          <p>{level}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreatePlayerForm;
