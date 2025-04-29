import ex1 from "../public/explorenesia/1.jpg";
import ex2 from "../public/explorenesia/2.jpg";
import ex3 from "../public/explorenesia/3.jpg";
import ex4 from "../public/explorenesia/4.jpg";
import ex5 from "../public/explorenesia/5.jpg";
import ex6 from "../public/explorenesia/6.jpg";
import ex7 from "../public/explorenesia/7.jpg";
import ex8 from "../public/explorenesia/8.jpg";
import dis1 from "../public/diskop/1.jpg";
import dis2 from "../public/diskop/2.jpg";
import dis3 from "../public/diskop/3.jpg";
import dis4 from "../public/diskop/4.jpg";
import dis5 from "../public/diskop/5.jpg";
import su1 from "../public/suki/1.jpg";
import su2 from "../public/suki/2.jpg";
import su3 from "../public/suki/3.jpg";
import su4 from "../public/suki/4.jpg";
import su5 from "../public/suki/5.jpg";
import pt1 from "../public/panjitravel/1.jpg";
import pt2 from "../public/panjitravel/2.jpg";
import pt3 from "../public/panjitravel/3.jpg";
import pt4 from "../public/panjitravel/4.jpg";
import pt5 from "../public/panjitravel/5.jpg";
import ele1 from "../public/elegame/1.jpg";
import ele2 from "../public/elegame/2.jpg";
import ele3 from "../public/elegame/3.jpg";
import ele4 from "../public/elegame/4.jpg";
import sm1 from "../public/smarthome/1.jpg";
import sm2 from "../public/smarthome/2.jpg";
import tt from "../public/tasktracker/1.jpg";
import tt2 from "../public/tasktracker/2.jpg";
import tt3 from "../public/tasktracker/3.jpg";
import tt4 from "../public/tasktracker/4.jpg";
import tt5 from "../public/tasktracker/5.jpg";
import sp1 from "../public/studentportal/2.jpg";
import sp2 from "../public/studentportal/1.jpg";
import sp3 from "../public/studentportal/3.jpg";
import sp4 from "../public/studentportal/4.jpg";
import sp5 from "../public/studentportal/5.jpg";
import rs1 from "../public/retno/1.jpg";
import rs2 from "../public/retno/2.jpg";
import rs3 from "../public/retno/3.jpg";
import rs4 from "../public/retno/4.jpg";
import rs5 from "../public/retno/5.jpg";
import rs6 from "../public/retno/6.jpg";
import vrac1 from "../public/vrac/1.jpeg";
import vrac2 from "../public/vrac/2.jpeg";

export const projectData = [
  {
    id: 1,
    images: [ele1, ele2, ele3, ele4],
    title: "Efootball Account Ecommerce (Elegame) - On Development",
    description:
      "Elegame is an e-commerce platform for buying and selling Efootball accounts, featuring account listings, budget-based filters, and a dashboard for managing sales and analytics.",
    link: "https://github.com/lilbroccy/platform_jb",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Docker"],
  },
  {
    id: 2,
    images: [ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8],
    title: "Explorenesia Smart Tourism",
    description:
      "Explorenesia is a smart tourism dashboard developed for the Ministry of Tourism to analyze sentiment around Indonesia’s super-priority destinations. It collects review data via web scraping from Tripadvisor, Traveloka, Google Reviews, and Tiket.com. Key features include sentiment analysis, visitor statistics visualizations, and an integrated chatbot.",
    link: "https://github.com/smart-tourism/web",
    technologies: [
      "NextJs",
      "React",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Tailwind",
    ],
  },
  {
    id: 3,
    images: [dis1, dis2, dis3, dis4, dis5],
    title:
      "Sistem Informasi Bantuan, Fasilitasi, dan Pelatihan bagi IKM (Situansilat)",
    description:
      "Situansilat is a dashboard system built for the Bondowoso Department of Industry and Trade to manage data related to assistance, facilitation, and training for local SMEs (IKM). Its key feature includes advanced Excel export with multi-sheet support for detailed reporting.",
    link: "https://github.com/Ongghuen/diskoperindag-web",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind", "Bootstrap"],
  },
  {
    id: 4,
    images: [su1, su2, su3, su4, su5],
    title: "Mabel Sumber Rejeki Ecommerce (Suki)",
    description:
      "Suki is an e-commerce admin dashboard for managing product listings, tracking transaction statuses, generating sales reports, and analyzing performance. Designed to support daily operations and decision-making for the Mabel Sumber Rejeki platform.",
    link: "https://github.com/Ongghuen/suki-web-backend",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
  {
    id: 5,
    images: [pt1, pt2, pt3, pt4, pt5],
    title: "Panji Laras Travel Landing Page",
    description:
      "Panji Laras Travel is a responsive landing page designed to showcase travel services, highlight tour packages, and provide essential information to potential customers. Built with Bootstrap for fast and mobile-friendly performance.",
    link: "https://github.com/DaffaAfifi/panji-travel",
    technologies: ["Bootstrap"],
  },
  {
    id: 6,
    images: [sm1, sm2],
    title: "Smart Home Energy Management System",
    description:
      "Smart Home Energy Management System built with Golang and the Tapas AI model from Huggingface. It collects and processes household energy usage data to deliver insights and recommendations for optimizing energy consumption in smart home environments.",
    link: "https://github.com/DaffaAfifi/golang-rg-stuff/tree/main/ai%20w%20golang/final-project-golang-ai-v4",
    technologies: ["Gin", "Golang", "Huggingface"],
  },
  {
    id: 7,
    images: [tt, tt2, tt3, tt4, tt5],
    title: "Task Tracker Plus",
    description:
      "Task Tracker Plus is a productivity app designed to help students manage their study schedules more effectively. Built with Go (Golang) and PostgreSQL, it enables users to organize tasks, set deadlines, and stay on top of their academic goals.",
    link: "https://github.com/DaffaAfifi/golang-rg-stuff/tree/main/web%20application/fcp-web-application-v2",
    technologies: ["Gin", "Golang", "PostgreSQL", "Bootstrap"],
  },
  {
    id: 8,
    images: [sp1, sp2, sp3, sp4, sp5],
    title: "Student Portal API",
    description:
      "Student Portal API is a RESTful service built with Golang (Gin framework) and PostgreSQL. It provides endpoints for managing student-related operations, including user registration, authentication, and student data management.",
    link: "https://github.com/DaffaAfifi/golang-rg-stuff/tree/main/database%20management/fcp-database-management-v2",
    technologies: ["Gin", "Golang", "PostgreSQL"],
  },
  {
    id: 9,
    images: [rs1, rs2, rs3, rs4, rs5, rs6],
    title: "Rumah Batik Retnosari",
    description:
      "Rumah Batik Retnosari is a desktop application built using Java and NetBeans to help manage store operations. It includes features for managing master data (customers, suppliers, products) and handling key transactions such as purchases, sales, and orders.",
    link: "https://github.com/DaffaAfifi/retnosari-app",
    technologies: ["Java", "Netbeans"],
  },
  {
    id: 10,
    images: [vrac1, vrac2],
    title: "Post Stroke Therapy Bikes",
    description:
      "Post Stroke Therapy Bikes is a VR simulator game designed for post-stroke rehabilitation. It aims to support patients in their recovery through immersive and interactive cycling therapy experiences.",
    link: "",
    technologies: [],
  },
];
