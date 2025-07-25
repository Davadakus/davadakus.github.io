import React from "react";

function ProjectCardLeft({
  imageSrc,
  title,
  description,
  role,
  tech,
  links = [],
}) {
  return (
    <div className="flex flex-wrap justify-center max-w-[2000px] gap-6 mx-auto">
      <div className="w-[45%]">
        <img src={imageSrc} draggable="false" className="object-contain" />
      </div>
      <div className="flex flex-col w-[45%] gap-10">
        <div className="flex-auto">
          <h1 className="block font-semibold text-[30px]">{title}</h1>
          <div className="inline-block text-[20px]">
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <br />
            <p><strong>Role:</strong> {role}</p>
            <br />
            <p><strong>Tech:</strong> {tech}</p>
          </div>
        </div>
        <div className="projects-link">
          {links.map(({ href, iconSrc }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconSrc} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCardLeft;