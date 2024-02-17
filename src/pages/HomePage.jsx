import useProjects from '../hooks/use-projects';
import ProjectCard from '../components/ProjectCard';
import './HomePage.css';

function HomePage() {
  const { projects } = useProjects();

  return (
    <div>
      <h1>Home Page</h1>
      <div id="project-list">
        {projects.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
