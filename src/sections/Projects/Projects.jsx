import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={`https://res.cloudinary.com/diyxwdtjd/image/upload/v1723009343/projects/Screenshot_from_2024-08-07_10-14-46_urqw5p.png`}
          codeLink={`https://github.com/debsouryadatta/souryax-course-generator`}
          externalLink={`https://coursex-bswq.onrender.com/`}
          h3="CourseX"
          p=""
        />
        <ProjectCard
          src={`https://res.cloudinary.com/diyxwdtjd/image/upload/v1723009352/projects/3_xvxk4j_wwu4km.jpg`}
          codeLink={`https://github.com/debsouryadatta/AI-Image-Generator-2.0`}
          externalLink={`https://expo.dev/preview/update?message=Image%20upload%20to%20cloudinary%20feature&updateRuntimeVersion=1.0.0&createdAt=2024-05-26T09%3A02%3A26.423Z&slug=exp&projectId=5ecb9c0d-6217-4c2b-b9e3-654922adeb67&group=d68465a8-bfeb-463c-8868-630a6ae747ce`}
          h3="SnapWire"
          p=""
        />
      </div>
    </section>
  );
}

export default Projects;
