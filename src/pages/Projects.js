import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import './Projects.scss';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectsPage = () => {
  return (
    <div >
      <Container className='g-0'>
        <Row className="projects">
          {projectsData.map((project,index) => (
            <Col key={project.id} xs={12} md={index === 0 ? '12' : '6'}>
              <div className="project-card">
                <Link to={`/projects/${project.id}`}>
                  <img src={project.imageSrc} alt={project.title} className="project-image" />
                </Link>
                <div className="project-title">{project.title}</div>
                <div className="project-hashtags">{project.hashtags}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsPage;
