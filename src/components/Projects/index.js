import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to mobile apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === 'all'}
            value="all"
            onClick={() => setToggle('all')}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'web app'}
            value="web app"
            onClick={() => setToggle('web app')}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'mobile app'}
            value="mobile app"
            onClick={() => setToggle('mobile app')}
          >
            Mobile APP'S
          </ToggleButton>
          
        </ToggleButtonGroup>
        <Divider />
        
        <CardContainer>
          {projects
            .filter((project) => toggle === 'all' || project.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
