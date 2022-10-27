import { Icons } from "../../../util/iconPicker";
import { ExperienceData } from "./types";

export const experienceData: ExperienceData[] = [
  {
    title: "Mobile Application Developer Intern",
    companyName: "Robert Bosch, LLC",
    dateRange: "Summer 2018",
    description: [
      "Updated existing application to optimize end user accessibility, converting QR code scanner via Swift and installing new data features that import contact information and produce personalized QR codes.",
      "Developed new code for existing applications to streamline operational functions while decreasing deployment time, successfully increasing application downloads by 1K+ after launch. ",
    ],
    tech: [
      { name: "React Native", icon: Icons.REACT },
      { name: "XCode (iOS)", icon: Icons.XCODE },
      { name: "ObjC", icon: Icons.OBJC },
      { name: "Swift", icon: Icons.SWIFT },
    ],
    location: "Mount Prospect, Illinois",
  },
  {
    title: "Web Application Developer Intern",
    companyName: "Robert Bosch, LLC",
    dateRange: "Summer 2019 - May 2020",
    description: [
      "Utilized React JS library and React Native open-source mobile application framework to program and develop internal web applications that support operational efficiency across global branches.",
      "Facilitated in-depth research to advance progress of new virtual reality (VR) mobile applications for internal use, conducting trial and error testing and quickly isolating technical limitations.",
    ],
    tech: [
      { name: "React", icon: Icons.REACT },
      { name: "React Native", icon: Icons.REACT },
      { name: "MaterialUI", icon: Icons.MUI },
      { name: "HTML", icon: Icons.HTML },
      { name: "CSS", icon: Icons.CSS },
      { name: "JavaScript", icon: Icons.JS },
      { name: "TypeScript", icon: Icons.TYPESCRIPT },
    ],
    location: "Chicago | Mount Prospect, Illinois",
  },
  {
    title: "Front End Developer",
    companyName: "Investor Cash Management",
    dateRange: "Spring 2021 - Present",
    description: [
      "Built, deployed, and distributed multiple web and mobile applications across various clients using React/React Native. Leveraged Appcenter and Jenkins pipeline to maintain releases.",
      "Improved upon existing features as well as continuously implemented new features, primarily within the scope of financial technology. Utilized Jira Software and Bitbucket to uphold an agile culture.",
    ],
    tech: [
      { name: "React", icon: Icons.REACT },
      { name: "Redux - Saga/Rematch", icon: Icons.REDUX },
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
];
