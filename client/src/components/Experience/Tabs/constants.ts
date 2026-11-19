import { Icons } from "../../../util/iconPicker";
import { ExperienceData } from "./types";

export const experienceData: ExperienceData[] = [
  {
    title: "Front-End Developer",
    companyName: "Investor Cash Management",
    dateRange: "Spring 2021 – Present",
    description: [
      "Built and shipped multiple web and mobile apps for several clients with React and React Native.",
      "Maintained releases through App Center and Jenkins pipelines, taking builds from development to distribution.",
      "Delivered new features and improved existing ones across FinTech products, working in an agile team with Jira and Bitbucket.",
    ],
    tech: [
      { name: "React", icon: Icons.REACT },
      { name: "Redux (Saga, Rematch)", icon: Icons.REDUX },
      { name: "React Native", icon: Icons.REACT },
      { name: "Bootstrap", icon: Icons.BOOTSTRAP },
      { name: "MySQL Workbench", icon: Icons.MYSQL },
      { name: "AWS EC2", icon: Icons.AWS },
      { name: "Java", icon: Icons.JAVA },
      { name: "HTML", icon: Icons.HTML },
      { name: "CSS", icon: Icons.CSS },
      { name: "JavaScript", icon: Icons.JS },
      { name: "TypeScript", icon: Icons.TYPESCRIPT },
    ],
    location: "Remote | Wilmington, Delaware",
  },
  {
    title: "Web Application Developer Intern",
    companyName: "Robert Bosch, LLC",
    dateRange: "Summer 2019 – May 2020",
    description: [
      "Developed internal web applications with React and React Native that support operational efficiency across Bosch's global branches.",
      "Researched and prototyped new virtual reality (VR) mobile apps for internal use, testing approaches to pinpoint technical limitations early.",
    ],
    tech: [
      { name: "React", icon: Icons.REACT },
      { name: "React Native", icon: Icons.REACT },
      { name: "Material UI", icon: Icons.MUI },
      { name: "HTML", icon: Icons.HTML },
      { name: "CSS", icon: Icons.CSS },
      { name: "JavaScript", icon: Icons.JS },
      { name: "TypeScript", icon: Icons.TYPESCRIPT },
    ],
    location: "Chicago | Mount Prospect, Illinois",
  },
  {
    title: "Mobile Application Developer Intern",
    companyName: "Robert Bosch, LLC",
    dateRange: "Summer 2018",
    description: [
      "Improved an existing app's accessibility, converting its QR code scanner to Swift and adding features to import contact information and generate personalized QR codes.",
      "Streamlined existing apps and reduced deployment time, increasing downloads by 1,000+ after launch.",
    ],
    tech: [
      { name: "React Native", icon: Icons.REACT },
      { name: "Xcode", icon: Icons.XCODE },
      { name: "Objective-C", icon: Icons.OBJC },
      { name: "Swift", icon: Icons.SWIFT },
    ],
    location: "Mount Prospect, Illinois",
  },
];
