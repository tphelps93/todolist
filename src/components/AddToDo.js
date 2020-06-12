import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddToDo extends Component {
  state = {
    modal: false,
  };

  render() {
    return (
      <div>
        <Button className="add" color="dark">
          Add Item
        </Button>
      </div>
    );
  }
}

export default AddToDo;
