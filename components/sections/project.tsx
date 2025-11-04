export interface ProjectType {
  id: number;
  image: string;
  title: string;
  description: string;
  client: string;
  completionTime: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    image: "assets/imgs/home-page-2/projects/img-1.png",
    title: "Integrate AI into the ecommerce system mh",
    description: "Developed an online learning platform with course management, quizzes, and progress tracking.",
    client: "Conceptual JSC",
    completionTime: "6 months",
    technologies: ["Node.js", "React", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    image: "assets/imgs/home-page-2/projects/img-1.png",
    title: "Another Project Title",
    description: "Another project description goes here.",
    client: "Second Client",
    completionTime: "4 months",
    technologies: ["Next.js", "TypeScript", "Firebase"],
    demoLink: "#",
    githubLink: "#"
  },
  // Add more projects as needed
];