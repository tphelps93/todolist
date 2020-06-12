import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class ToDoList extends Component {
  state = {
    tasks: [
      { id: 1, task: "Pick up groceries" },
      { id: 2, task: "Work on 'ToDo' application" },
      { id: 3, task: "Feed dogs" },
      { id: 4, task: "Do dishes" },
    ],
  };

  render() {
    return (
      <Container>
        <ListGroup className="listGroup">
          <TransitionGroup>
            {this.state.tasks.map(({ id, task }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove=btn m-2"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick}
                  >
                    &times;
                  </Button>
                  {task}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ToDoList;
