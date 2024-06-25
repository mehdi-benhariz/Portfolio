import React from "react";
import { experience } from "../portfolio";
import {
  Container,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

import { Fade } from "react-awesome-reveal";

import ExperienceCard from "../components/ExperienceCard";
const Experience = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dataExp, setDataExp] = React.useState({});
  const toggle = () => setIsOpen(!isOpen);
  const openDetails = (data) => {
    setDataExp(data);
    toggle();
  };
  return (
    <section className="section section-lg">
      <Container>
        <Fade left duration={1000} distance="40px">
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Experience</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            <div>
              <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{dataExp.company}</ModalHeader>
                <ModalBody>
                  <p>{dataExp.desc}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    More ?
                  </Button>{" "}
                </ModalFooter>
              </Modal>
            </div>
            {[...experience].reverse().map((data, i) => {
  return <ExperienceCard key={i} data={data} fn={openDetails} />;
})}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Experience;
