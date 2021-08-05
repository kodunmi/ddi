import React from 'react'

const ProjectCard = ({image,title,preview,id}) => {
    return (
        <a class="cardd">
        <div class="front" style={{backgroundImage: `url(${image})`}}>
          <p>{title}</p>
        </div>
        <div class="back">
          <div>
            <p>{preview}</p>
            <a
              href={`/project/${id}`}
              className="button"
            >Open Project</a>
           
          </div>
        </div>
      </a>
    )
}

export default ProjectCard
