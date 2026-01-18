import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kingsley",
  lastName: "WILLIAMS",
  name: `Kingsley WILLIAMS`,
  role: "Administrateur Systèmes Linux / Infra Cloud",
  avatar: "/images/kingsley.jpg",
  email: "kingsley.williams.pro@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Anglais", "Français"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kingsleyDeve",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kingsley-williams-324240135/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Portfolio - ${person.name} `,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Je suis kingsley WILLIAMS, Administrateur Systèmes Linux / Infra Cloud</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Mes projets
        </Text>
      </Row>
    ),
    href: "/work/gitlab-ci",
  },
  subline: (
    <>
    J’accompagne les équipes dans la conception, la mise en production et l’exploitation d’infrastructures fiables et sécurisées.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "A propos",
  title: `A propos – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/YebQySsPaCeXo5ms8",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>Je conçois, maintiens et sécurise des infrastructures fiables pour garantir une exploitation stable et performante. <br />
      J’assure la supervision, la résolution d’incidents et l’apport de solutions techniques adaptées. <br /> 
      J’automatise les déploiements et les tâches répétitives afin d’améliorer la disponibilité et d’accélérer la mise en production.
       <br /> Mon objectif : simplifier le quotidien des équipes et offrir une expérience utilisateur optimale.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Adipsys",
        timeframe: "01/2023 - 01/2025",
        role: "Administrateur Systèmes & Réseaux / DevOps",
        achievements: [
          <>
            Contexte :
            déploiement de wifi public BtoB portail captif dans une équipe de 3 personnes
          </>,
          <>
            Administration quotidienne de serveurs Linux Debian
          </>,
          <>
            Maintenance d’infrastructures web haute disponibilité pour garantir l’absence de downtime Docker Swarm
          </>,
          <>
            Déploiement et exploitation d’applications dans le cloud OVH, AWS
          </>,
          <>
           Rédaction de documentations techniques
          </>,
        ],
        
      },
      {
        company: "Agtek solutions informatiques",
        timeframe: "09/2020 - 09/2022",
        role: "Administrateur Systèmes & Réseaux",
        achievements: [
          <>
            Contexte :
            Support informatique pour +100 clients avec une équipe de 7 personnes
          </>,
          <>
            Création et gestion de machines virtuelles VMware ESXi
          </>,
           <>
            Installation de systèmes de sauvegarde NAS Synology
          </>,
           <>
            Mise en place de connexions sécurisées inter-sites VPN IPSec
          </>,
           <>
            Déploiement et configuration d’équipements réseau switchs, points d’accès Wi-Fi, routeurs
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formations",
    institutions: [

       {
        name: "Eazytraining",
        description: <>Bootcamp DevOps <br  /> <br />
        <strong>Contexte :</strong>  Bootcamp DevOps à distance, en cours du soir, axé sur la mise en pratique.
        Déploiement et gestiond’applications modernes,
        automatisation des environnements et mise en ligne de services dans le cloud.
        Travailsur la fiabilité, l’organisation et l’amélioration continue des systèmes informatiques.
        </>,
      },
      {
        name: "Ecole IPSSI",
        description: <>Master en cybersécurité & cloud <br  /> <br />
        <strong>Contexte :</strong> Formation en présentiel axée sur le cloud et la cybersécurité, 
        avec une approche pratique des méthodesAgile. Apprentissage de l’automatisation des systèmes,
        de la gestion d’infrastructures modernes et de lasécurisation des environnements informatiques,
        programmation, bases de données.
        </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences Techniques",
    skills: [
      {
        title: "Cloud & Infrastructure",
        description: (
          <></>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
            
          },
          {
            name: "Docker",
            icon: "docker",
            
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
            
          },
           {
            name: "GitLab",
            icon: "gitlab",
            
          },
           {
            name: "Linux",
            icon: "linux",
            
          },
        ],
        // optional: leave the array empty if you don't want to display images
      
      },
      {
        title: "Monitoring",
        description: (
          <></>
        ),
        tags: [
            {
              name: "Grafana",
              icon: "grafana",
            },
            {
              name: "Prometheus",
              icon: "prometheus",
            },
        
        ],
        // optional: leave the array empty if you don't want to display images
      
      },
      {
        title: "DevOps & Automation",
        description: (
          <></>
        ),
        tags: [
          {
              name: "Terraform",
              icon: "terraform",
            },
            {
              name: "argoCD",
              icon: "argocd",
            },
            {
              name: "Ansible",
              icon: "ansible",
            },
        ],
        // optional: leave the array empty if you don't want to display images
      
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `DevOps projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
