import React, { Component } from "react";
import { fetchMovie } from "../actions/movieActions";
import { connect } from "react-redux";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSeach: "",
    };
  }

  handleSummit = (e) => {
    e.preventDefault();

    this.props.history.push("/");
    this.props.searchMovie(this.state.valueSeach);
  };

  handleOnChange = (e) => {
    this.setState({ valueSeach: e.target.value });
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form onSubmit={this.handleSummit} inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.valueSeach}
              onChange={this.handleOnChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapDispatchToProps = (dispach) => {
  return {
    searchMovie: (value) => dispach(fetchMovie(value)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
