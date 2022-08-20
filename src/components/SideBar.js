import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const SideBar = () => {
  const rooms = ["first room", "second room", "third room"];
  return (
    <div>
      <h2>Available rooms</h2>
      <ListGroup>
        {rooms.map((room, i) => (
          <ListGroup.Item key={i}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </div>
  );
};

export default SideBar;
