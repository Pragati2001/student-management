import axios from "axios";
import { Component } from "react";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

type MyProps = {
  isOpen: boolean;
  toggle;
};

export class AddStudentModal extends Component<MyProps> {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const student = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      marks: data.get("marks"),
      subject: data.get("subject"),
      semester: data.get("semeseter"),
    };

    axios.post("http://localhost:7070/create", student);
    window.location.reload();
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          Adding new wise student
        </ModalHeader>
        <ModalBody>
          <form action="" onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <label htmlFor="firstName">First Name</label>
              </Col>
              <Col>
                <input type="text" id="firstName" name="firstName" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="lastName">Last Name</label>
              </Col>
              <Col>
                <input type="text" id="lastName" name="lastName" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="marks">Marks</label>
              </Col>
              <Col>
                <input type="number" id="marks" name="marks" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="subject">Subject</label>
              </Col>
              <Col>
                <input type="text" id="subject" name="subject" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="semester">Semester</label>
              </Col>
              <Col>
                <input type="number" id="semester" name="semester" />
              </Col>
            </Row>
            <Button color="primary" type="submit">
              Add new student
            </Button>
          </form>
        </ModalBody>
      </Modal>
    );
  }
}
