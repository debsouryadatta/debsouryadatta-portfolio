import styles from './ProjectsStyles.module.css';
import cognicourse from '../../assets/cognicourse.jpg';
import imagine from '../../assets/imagine.jpg';
import snapwire from '../../assets/snapwire.jpg';
import campusbuddy from '../../assets/campusbuddy.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cognicourse}
          link="https://github.com/debsouryadatta/souryax-course-generator"
          h3="CogniCourse"
          p="Course Generation"
        />
        <ProjectCard
          src={imagine}
          link="https://github.com/debsouryadatta/AI-Image-Generator-2.0"
          h3="Imagine"
          p="Image Gen. Community"
        />
        <ProjectCard
          src={snapwire}
          link="https://github.com/debsouryadatta"
          h3="SnapWire"
          p="Video Gen. Community"
        />
        <ProjectCard
          src={campusbuddy}
          link="https://github.com/debsouryadatta/axios-buy-sell-platform"
          h3="CampusBuddy"
          p="Commerce Platform"
        />
      </div>
    </section>
  );
}

export default Projects;
