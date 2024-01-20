import React from 'react';
import Project from './Project';

const Portfolio = () => {
  // You can map through your projects and render Project component for each
  return (
    <section>
      <h2>Portfolio</h2>
      <Project title="Project 1" image="path/to/project1.jpg" deployLink="#" repoLink="#" />
      <Project title="Project 2" image="path/to/project2.jpg" deployLink="#" repoLink="#" />
      {/* Add more projects as needed */}
    </section>
  );
};

export default Portfolio;