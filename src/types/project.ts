export interface Collaborator {
  name: string;
  email: string;
  github: string;
}

export interface LongDescription {
  intro: string;
  motivation: string;
  process: string;
  futureAdditions: string[];
  technologyHighlights: string[];
}

export interface Project {
  title: string;
  github: string;
  hosted: string;
  image: string[];
  shortDescription: string;
  startDate: string;
  endDate: string;
  collaborators: Collaborator[];
  longDescription: LongDescription;
}


export interface ProjectsData {
  projects: Project[];
}
