import { Component } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import { IoSchoolOutline, IoMan, IoSettings } from "react-icons/io5";
import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { AddStudentModal } from "./AddStudentModal";

interface MyState {
  students: [];
  isOpen: boolean;
}

export class Dashboard extends Component<{}, MyState> {
  state: MyState = {
    students: [],
    isOpen: false,
  };

  componentDidMount() {
    axios.get("http://localhost:7070/list").then((res) => {
      const students = res.data;
      this.setState({ students });
    });
  }

  toggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div>
        <Navbar color="dark" light mb-2>
          <NavbarBrand className="text-white">
            <IoSchoolOutline className="font-size-xxl" />
            <span className="font-size-l ml-3">School Manager Application</span>
          </NavbarBrand>
        </Navbar>
        <AddStudentModal isOpen={this.state.isOpen} toggle={this.toggle} />
        <Container className="mt-4">
          <Row>
            <Col sm="12" className="text-center">
              <Button className="btn btn-success block" onClick={this.toggle}>
                <span className="font-size-l">Add New Student</span>
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="mt-4">
          {this.state.students.map((student) => renderStudent(student))}
        </Container>
      </div>
    );
  }
}

function renderStudent(s: any) {
  return (
    <Row>
      <Col sm="12">
        <Card body>
          <CardTitle tag="h5">
            <IoMan className="font-size-xl" /> {s.firstName + " " + s.lastName}
          </CardTitle>
          <CardBody>
            <Row>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">
                  <b>marks</b>
                </span>
                <span>{" " + s.marks}</span>
              </Col>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">
                  <b>subject</b>
                </span>
                <span>{" " + s.subject} </span>
              </Col>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">
                  <b>semester</b>
                </span>
                <span>{" " + s.semester} </span>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <Row>
              <Col sm-6>
                <Button className="btn btn-outline-primary block">Edit</Button>
              </Col>
              <Col sm-6>
                <Button
                  className="btn btn-outline-danger block"
                  onClick={() => deleteStudent(s.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}
function deleteStudent(id: String): void {
  axios.post(`http://localhost:7070/delete/${id}`);
  window.location.reload();
}
