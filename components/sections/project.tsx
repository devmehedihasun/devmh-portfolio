export interface ProjectType {
  id: number;
  image: string;
  title: string;
  description: string;
  client: string;
  completionTime: string;
  technologies: string[];
  websitelink: string;
  githubLink: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    image: "assets/imgs/home-page-2/projects/drivinginstructor.png",
    title: "Website for driving instructor",
    description: "I developed this website for my client, who provides services to driving instructors needing their own websites. The site also includes a custom form integrated with Zoho CRM for automation.",
    client: "Dorran",
    completionTime: "12 days",
    technologies: ["WordPress", "Elementor", "PHP"],
    websitelink: "https://drivinginstructortemplates.co.uk/",
    githubLink: "#"
  },
  {
    id: 2,
    image: "assets/imgs/home-page-2/projects/brightpathaisolutions.png",
    title: "Brightpath AI Solutions",
    description: "This is a SaaS project for BrightPath AI Solutions, a company that offers AI-driven tools to enhance business operations and decision-making processes. The website includes two custom plugins that I developed specifically for the client.",
    client: "Second Client",
    completionTime: "1 Month",
    technologies: ["WordPress", "Elementor", "Javascript", "PHP"],
    websitelink: "https://brightpathaisolutions.com/",
    githubLink: "#"
  },
  // Add more projects as needed
];