import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import data from '../../data.json'
import FranPortfolio from '../../Assets/Projects/franPortfolio.webp'
import TuWebHoy from '../../Assets/Projects/tuwebhoy.webp'
import RedSocial from '../../Assets/Projects/red-social.webp'
import Lance from '../../Assets/Projects/lance.webp'
import Minga from '../../Assets/Projects/minga.webp'
import PetShop from '../../Assets/Projects/petshop.webp'
import ToDoApp from '../../Assets/Projects/todo-app.webp'

const images = [FranPortfolio, TuWebHoy, RedSocial, Lance, Minga, PetShop, ToDoApp]

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {
              data.map((obj, i) => {
                return <Col md={6} lg={4} className={'project-card ' + obj.class} key={i}>
                  <ProjectCard
                    imgPath={images[i]}
                    isBlog={false}
                    title={obj.titulo}
                    description={obj.descripcion}
                    ghLink={obj.github}
                    demoLink={obj.pagina}
                  />
                </Col>
              })
            }
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
