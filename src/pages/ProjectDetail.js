import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';
import ErrorPage from './ErrorPage';
import './ProjectDetail.scss';
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';

const Project = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div><ErrorPage/></div>;
  }

  return (
    <div className='project-detail'>
      <div className='top-container'>
        <div className='back-button'>
          <Link to="/projects"><LiaLongArrowAltLeftSolid size={15} />Back</Link>
        </div>
        <div className='project-intro'>
          <h6>{project.title}</h6>
          <p>{project.hashtags}</p>
        </div>
      </div>
      <p className='intro'>{project.intro}</p>
      <div className='project-images'>
        {project.projectImages.map((imageSrc, index) => (
          <img key={index} src={imageSrc} alt={`Project ${index + 1}`} />
        ))}
      </div>
      <div className='back-button'>
        <Link to="/projects"><LiaLongArrowAltLeftSolid size={15} />Back to Projects</Link>
      </div>
    </div>
  );
};

export default Project;
