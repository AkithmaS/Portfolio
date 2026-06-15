import {
  SiPython, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiSpringboot, SiHtml5, SiCss, SiTailwindcss,
  SiMysql, SiPostgresql, SiMongodb,
  SiDocker, SiGit, SiGithub, SiPostman, SiFigma,
  SiKotlin, SiLinux, SiDotnet, SiClickup, SiJira,
  SiCplusplus, SiC, SiCanva, SiOctave,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { TbBrandCSharp } from 'react-icons/tb'

export const skills = [
  { name: 'Java',        Icon: FaJava,          color: '#f89820' },
  { name: 'Python',      Icon: SiPython,        color: '#3776AB' },
  { name: 'JavaScript',  Icon: SiJavascript,    color: '#F7DF1E' },
  { name: 'React',       Icon: SiReact,         color: '#61DAFB' },
  { name: 'Next.js',     Icon: SiNextdotjs,     color: '#ffffff'  },
  { name: 'Node.js',     Icon: SiNodedotjs,     color: '#339933' },
  { name: 'Spring Boot', Icon: SiSpringboot,    color: '#6DB33F' },
  { name: 'HTML5',       Icon: SiHtml5,         color: '#E34F26' },
  { name: 'CSS3',        Icon: SiCss,           color: '#1572B6' },
  { name: 'Tailwind CSS',Icon: SiTailwindcss,   color: '#06B6D4' },
  { name: 'MySQL',       Icon: SiMysql,         color: '#4479A1' },
  { name: 'PostgreSQL',  Icon: SiPostgresql,    color: '#336791' },
  { name: 'MongoDB',     Icon: SiMongodb,       color: '#47A248' },
  { name: 'AWS',         Icon: FaAws,           color: '#FF9900' },
  { name: 'Docker',      Icon: SiDocker,        color: '#2496ED' },
  { name: 'Git',         Icon: SiGit,           color: '#F05032' },
  { name: 'GitHub',      Icon: SiGithub,        color: '#e6edf3'  },
  { name: 'Postman',     Icon: SiPostman,       color: '#FF6C37' },
  { name: 'Figma',       Icon: SiFigma,         color: '#F24E1E' },
  { name: 'Kotlin',      Icon: SiKotlin,        color: '#7F52FF' },
  { name: 'C',           Icon: SiC,             color: '#A8B9CC' },
  { name: 'C++',         Icon: SiCplusplus,     color: '#00599C' },
  { name: 'C#',          Icon: TbBrandCSharp,   color: '#9B59B6' },
  { name: 'Linux',       Icon: SiLinux,         color: '#FCC624' },
  { name: '.NET',        Icon: SiDotnet,        color: '#512BD4' },
  { name: 'ClickUp',     Icon: SiClickup,       color: '#7B68EE' },
  { name: 'Jira',        Icon: SiJira,          color: '#0052CC' },
  { name: 'Canva',       Icon: SiCanva,         color: '#00C4CC' },
  { name: 'Octave',      Icon: SiOctave,        color: '#0790C0' },
]

// Keep backward compat for any component still importing skillCategories
export const skillCategories = [
  { id: 'all', category: 'All', emoji: '⚡', skills },
]
