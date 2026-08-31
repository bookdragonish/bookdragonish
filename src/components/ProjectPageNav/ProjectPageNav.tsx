import NavLink from "./NavLink/NavLink";
import style from "./ProjectPageNav.module.css";

interface ProjectPageNavProps {
  hostedLink?: string;
  githubLink?: string;
}

function ProjectPageNav({ hostedLink, githubLink }: ProjectPageNavProps) {
  return (
    <>
      <span className={style.linking_background} />

      <section className={style.linking_container}>
        {hostedLink && (
          <NavLink
            skill={"Link to Page"}
            logo={"/icons/link.svg"}
            link={hostedLink}
          />
        )}

        {githubLink && (
          <NavLink
            skill={"Github"}
            logo={"/icons/github.svg"}
            link={githubLink}
          />
        )}
      </section>

      <span className={style.linking_background} />
    </>
  );
}

export default ProjectPageNav;
