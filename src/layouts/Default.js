import React from "react";
import PropTypes from "prop-types";
import MainNavbar from "../commons/MainNavbar/MainNavbar";
import { Col, Container, Row } from "react-bootstrap";
const DefaultLayout = ({ children, noNavbar }) => {
  return (
    <React.Fragment>
      {!noNavbar && <MainNavbar />}
      <Container fluid className="p-0">
        <Row className="m-auto">
          <Col
            className="main-content p-0 m-auto"
            lg={12}
            md={12}
            sm={12}
            xs={12}
            tag="main"
          >
            {children}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
};

DefaultLayout.defaultProps = {
  noNavbar: false,
};
export default DefaultLayout;
