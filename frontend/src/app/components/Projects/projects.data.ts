import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaStrava, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiGooglemaps,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiRender,
  SiFirebase,
  SiGatsby,
  SiExpress,
} from "react-icons/si";

export type StackItem = {
  name: string;
  icon: IconType;
  color?: string;
};

export type ProjectData = {
  title: string;
  description: string;
  stack: StackItem[];
  github: string;
  demo?: string;
  featured?: boolean;
  status?: "in-progress" | "live" | "archived";
};

export const projects: ProjectData[] = [
  {
    title: "froilanbuendia.com",
    description:
      "This portfolio — a fully serverless site on AWS. Next.js is statically exported and served globally via CloudFront backed by a private S3 bucket with Origin Access Control. A real-time visitor counter is powered by Lambda and DynamoDB behind an HTTP API Gateway. All infrastructure is defined as code with AWS CDK and deployed automatically through GitHub Actions using OIDC for keyless auth — no stored credentials.",
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { name: "AWS CDK", icon: FaAws, color: "#FF9900" },
      { name: "S3 & CloudFront", icon: FaAws, color: "#FF9900" },
      { name: "Lambda & DynamoDB", icon: FaAws, color: "#FF9900" },
      { name: "Route 53", icon: FaAws, color: "#FF9900" },
    ],
    github: "https://github.com/froilanbuendia/froilanbuendia",
    demo: "https://froilanbuendia.com",
    featured: true,
    status: "live",
  },
  {
    title: "Nilly's Burger Shop",
    description:
      "Built and deployed a website for a real local restaurant — actively used by customers to find the location and get in touch. Led the contact page with Google Maps integration, a direct phone link, and an email form so customers can reach the restaurant in one click.",
    stack: [
      { name: "Gatsby", icon: SiGatsby, color: "#663399" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Google Maps API", icon: SiGooglemaps, color: "#4285F4" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
    github: "",
    demo: "https://www.nillysburgershop.com/",
    featured: true,
    status: "live",
  },
  {
    title: "LetMeRun",
    description:
      "Personal training dashboard that connects to Strava via OAuth 2.0 to pull real workout data and surface insights I actually use for marathon training. Tracks mileage load, flags overtraining risk, and visualizes pace and elevation trends through interactive Chart.js graphs.",
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { name: "Node / Express", icon: SiExpress, color: "#3D9E3D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Strava API", icon: FaStrava, color: "#FC4C02" },
    ],
    github: "https://github.com/froilanbuendia/RunBalance",
    status: "in-progress",
  },
  {
    title: "Aim Trainer",
    description:
      "A full-stack aim training web app where users can log in, play timed sessions, and track scores. Features secure authentication with Firebase, automated CI/CD deployment with GitHub Actions, and robust unit tests using Jest and React Testing Library to ensure reliability and smooth gameplay.",
    stack: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Node", icon: FaNodeJs, color: "#3D9E3D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Render", icon: SiRender, color: "#7B3FE4" },
      { name: "Firebase", icon: SiFirebase, color: "#F5820D" },
    ],
    github: "https://github.com/froilanbuendia/aim-trainer",
    status: "archived",
  },
  {
    title: "ProTasker",
    description:
      "A Chrome Extension that helps users boost productivity by tracking time-on-site and blocking distracting websites. Features intuitive UI for configuring blocklists and time limits, robust session management, and real-time application of blocking rules across active tabs. Developed collaboratively using GitHub PRs, issue tracking, and iterative feature delivery.",
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    github: "https://github.com/JHowellLB/ProTasker",
    status: "archived",
  },
  {
    title: "GradBook",
    description:
      "A photo album web app for storing and sharing senior year and graduation photos. Features fast global delivery using CloudFront with S3-hosted images, and smooth user experience through pagination and asynchronous image loading.",
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { name: "S3 & CloudFront", icon: FaAws, color: "#FF9900" },
      { name: "Render", icon: SiRender, color: "#7B3FE4" },
    ],
    github: "https://github.com/froilanbuendia/Froi-Grad",
    status: "archived",
  },
];
