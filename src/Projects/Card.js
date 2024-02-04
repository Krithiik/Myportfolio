export default function Card(props) {
  let project = props.project;
  return (
    <div class="card">
      <img src={project.localImg} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{project.name}</h5>
        <h9 class="tech-stack">{project.stack}</h9>
        <p class="card-text">{project.description}</p>
        <a href={project.git} class="btn btn-secondary">
          Visit github
        </a>
      </div>
    </div>
  );
}
