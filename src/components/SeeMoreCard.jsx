import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-awesome-reveal";
import { openSource } from "../portfolio";
const SeeMoreCard = () => {
  return (
    <Col lg="6">
      <Fade bottom duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>More?</h3>
                <p className="description mt-3">See More Of my projects ?</p>

                <Button
                  className="btn-icon"
                  color="success"
                  // href={`https://github.com/${openSource.githubUserName}`}
                  href="https://projects.mehdibenhariz.dev/"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-1" />
                  </span>
                  <span className="nav-link-inner--text ml-1"></span>
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default SeeMoreCard;
