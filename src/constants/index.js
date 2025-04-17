import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  home,
  terraform,
  fox,
  whitebox,
  foresight,
  web2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "CMS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Administrator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancing",
    company_name: "Residence",
    icon: home,
    iconBg: "#383E56",
    date: "Jan 2020 - April 2023",
    points: [
      "Designed and developed custom websites for clients using WordPress and Elementor, creating responsive and visually appealing layouts with CSS and JavaScript for enhanced interactivity.",
      "Collaborated with clients to understand their needs, delivering tailored WordPress solutions with Elementor, ensuring user-friendly interfaces and seamless functionality across devices.",
      "Customized WordPress themes and plugins with CSS and JavaScript, optimizing site performance and ensuring cross-browser compatibility for a consistent user experience.",
      "Integrated third-party APIs and services into WordPress sites, leveraging JavaScript to add dynamic features like contact forms, interactive galleries, and e-commerce functionalities.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Fox Media",
    icon: fox,
    iconBg: "#E6DEDD",
    date: "April 2023 - Sep 2024",
    points: [
      "Spearheaded the development of Fox Media’s online presence by designing and building responsive websites from scratch using WordPress, Elementor, CSS, and JavaScript, ensuring a professional and user-friendly digital platform for the startup.",
      "Collaborated with the founding team to translate their vision into functional web solutions, customizing WordPress themes and plugins to align with the company’s branding and goals, while optimizing for performance and SEO.",
      "Implemented dynamic features on the website, such as interactive media galleries and contact forms, using JavaScript and CSS, enhancing user engagement and supporting Fox Media’s mission to connect with its audience.",
      "Managed the full web development lifecycle, from concept to deployment, utilizing Elementor for rapid prototyping and custom CSS/JavaScript for tailored designs, ensuring the site met the startup’s evolving needs.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "The Whitebox.Co",
    icon: whitebox,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Co-founded The Whitebox.Co, a creative agency specializing in web development, event photography, and video production, collaborating closely with my partner to establish a client-focused business model that delivers high-quality digital solutions.",
      "Led web development projects, designing and building responsive websites using WordPress, Elementor, CSS, and JavaScript, while integrating modern frameworks like React and Node.js to create dynamic, scalable platforms tailored to client needs.",
      "Managed event photography operations, utilizing my Canon EOS 750D and automated workflows with Lightroom and Photoshop to streamline photo editing, applying consistent adjustments like exposure corrections and custom backgrounds, ensuring professional-grade deliverables for clients.",
      "Oversaw video production efforts, handling filming, editing, and post-production processes, leveraging my technical expertise to produce polished videos with seamless transitions and engaging visuals for events and promotional campaigns.",
    ],
  },
  {
    title: "Cloud Ops Internship",
    company_name: "Foresight Engineering Pvt. Ltd.",
    icon: foresight,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "Joined Foresight Engineering Pvt. Ltd. as a Cloud Ops Intern, supporting the deployment and management of cloud infrastructure using AWS and GCP, ensuring scalable and reliable environments for the company’s applications.",
      "Utilized Docker to containerize applications, streamlining development and deployment processes, and improving consistency across development, testing, and production environments on Linux-based systems.",
      "Assisted in optimizing cloud resources by monitoring performance and implementing cost-effective solutions, leveraging tools like AWS CloudWatch and Azure Monitor to ensure high availability and efficiency.",
      "Collaborated with the engineering team to migrate legacy systems to the cloud, integrating databases like MySQL and MongoDB with cloud services, ensuring seamless data management and accessibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Avinash Perera has been an absolute pleasure. He’s not just technically skilled — he brings a creative approach to solving problems and always steps up to support the team when needed. His calm under pressure is something I really admire.",
    name: "Sithum Buddika",
    designation: "Software Engineer",
    company: "Foresight Engineering Pvt. Ltd.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFNIsGUxXMm-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731185198793?e=1750291200&v=beta&t=zhxGNxRI5MqQOQeAZpIjRLNmkUAWUpz3MdGPGFUv8V4",
  },
  {
    testimonial:
      "Beyond being great at what he does, Avinash is just a genuinely awesome person to work with. Humble, always learning, and never gatekeeping knowledge — he makes the team better both technically and culturally.",
    name: "Rashmi Kavindya",
    designation: "AI Architecht",
    company: "Foresight Engineering Pvt. Ltd.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGLftA_xXSFgA/profile-displayphoto-shrink_200_200/B56ZY.GEQ6H0AY-/0/1744798500575?e=1750291200&v=beta&t=cT9NcEqV45ZCcEHybZ47gk3mlvyPoXbjmE0uAD4kK-I",
  },
  {
    testimonial:
      "Avinash is reliable, driven, and detail-oriented. He takes full ownership of his tasks and never hesitates to help others when needed. His energy and dedication uplift the whole team.",
    name: "Yohan Indunil",
    designation: "Tech Lead",
    company: "Foresight Engineering Pvt. Ltd.",
    image: "https://media.licdn.com/dms/image/v2/C5103AQF60iGM1-XRng/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517063719954?e=1750291200&v=beta&t=CLB-B8KnJNLEp1XEPvOzPc2-Gwz4LwWVSROiXaoBF20",
  },
];

const webproject = [
  {
    name: "St. Joseph's College Official Website",
    description:
      "Developed the Official Website for St. Joseph's College Colombo 10, delivering a modern, user-friendly platform to showcase the institution’s legacy and activities.",
    tags: [
      {
        name: "wordPress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "elementor",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://stjosephscollege.lk/",
  },
];

const projects = [
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, webproject };
