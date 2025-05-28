import vscode from './vscode.png';
import git from './git.png';
import react from "./react.svg"
import supabase from "./supabase.svg"
import tailwind from "./Tailwind CSS.png"
import next from "./nextjs.svg"
import github from "./github.png"
import restau from "./food.png"
import interieur from "./Inter.png"
import store from "./interstore.png"
import { BriefcaseBusiness, ChartSpline, Code, Layers, NotebookPen, ShoppingBasket, Zap } from 'lucide-react';


export const Services = [
  {
    title: "Landing Page",
    icon: <Layers className='h-8 w-8 p-1 bg-to text-white rounded-lg'/>,
    description: "Designing and building high-converting landing pages that are responsive, fast, and optimized for user engagement."
  },
  {
    title: "E-commerce",
    icon: <ShoppingBasket className='h-8 w-8 p-1 bg-to text-white rounded-lg'/>,
    description: "Creating secure and scalable online stores with product catalogs, payment integration, and order management."
  },
  {
    title: "SEO Optimization",
    icon: <ChartSpline className='h-8 w-8 p-1 bg-to text-white rounded-lg'/>,
    description: "Improving your website’s visibility on search engines using technical SEO, performance tweaks, and structured data."
  },
  {
    title: "Performance ",
    icon: <Zap className='h-8 w-8 p-1 bg-to text-white rounded-lg'/>,
    description: "Speeding up websites with caching, lazy loading, image compression, and clean code for better UX and SEO."
  }
];


export const infoList = [
    { icon: <Code className='h-10 w-10'/>,title: 'Languages', description: 'HTML, CSS, JavaScript , TypeScript' },
{ icon: <NotebookPen className='h-8 w-8' />, title: 'Education', description: 'Self-Educated in Web Development' },
    { icon:<BriefcaseBusiness className='h-9 w-9'/> ,title: 'Projects', description: 'Built more than 35 projects' }
];

export const tools = [
    vscode,git , react , tailwind , next , supabase , github
];

export const projects = [
  {
    title: "E-commerce Platform",
    image: store,
    description: "Developed a responsive, high-performance e-commerce landing page optimized for conversions and user engagement, with dynamic content and seamless user experience.",
    tools: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tailwind CSS"
    ],
    url: "https://airtalee-design.vercel.app",
    github : "https://github.com/Anasbd05/interior-des"
  },
  {
    title: "Food Delivery",
    image: restau,
    description: "Built a modern and intuitive front-end for a food delivery service, focusing on speed, usability, and mobile responsiveness to enhance the ordering experience.",
    tools: [
      "JavaScript",
      "React.js",
      "Tailwind CSS"
    ],
    url: "https://delivery-food-sigma.vercel.app",
    github : "https://github.com/Anasbd05/Delivery-food"
  },
  {
    title: "Interior Design",
    image: interieur,
    description: "Created a sleek and visually engaging landing page for an interior design service, with dynamic sections and a strong visual identity to attract high-end clients.",
    tools: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tailwind CSS"
    ],
    url: "https://decosit4u.vercel.app",
    github : "https://github.com/Anasbd05/decosit_interior"
  },
];

export const pricingPlans = [
  {
    id: 1,
    title: "Landing Page",
    description: "A modern, responsive one-page website to showcase your product or service.",
    price: "999DH",
    features: [
      "Custom design",
      "Responsive layout",
      "Contact form",
      "Fast loading speed",
    ],
  },
  {
    id: 2,
    title: "E-commerce",
    description: "A complete online store with product listings, cart, and checkout functionality.",
    price: "1800DH",
    features: [
      "Product pages",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Admin dashboard",
    ],
  },
  {
    id: 3,
    title: "Other",
    description: "Need something unique? Let's discuss your idea and build a custom solution.",
    price: "Custom",
    features: [
      "Tailored to your needs",
      "Flexible features",
      "Consultation included",
      "Scalable design",
    ],
  },
];
