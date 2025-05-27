import vscode from './vscode.png';
import git from './git.png';
import react from "./react.svg"
import supabase from "./supabase.svg"
import next from "./nextjs.svg"
import github from "./github.png"
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
    vscode,git , react , next , supabase , github
];