// config/questionnaire.js
import React from 'react';
import { User, Monitor, Target, Zap, Code } from 'lucide-react';

export const questionnaire = [
  {
    id: 'experience',
    question: 'What is your development experience level?',
    type: 'single',
    icon: <User className="w-5 h-5" />,
    options: [
      { 
        value: 'beginner', 
        label: 'Beginner (0-1 years)', 
        desc: 'New to development or very limited experience' 
      },
      { 
        value: 'intermediate', 
        label: 'Intermediate (2-4 years)', 
        desc: 'Comfortable with basic concepts, some project experience' 
      },
      { 
        value: 'advanced', 
        label: 'Advanced (5+ years)', 
        desc: 'Experienced developer, familiar with complex workflows' 
      }
    ]
  },
  {
    id: 'platform',
    question: 'What operating system will you be using?',
    type: 'single',
    icon: <Monitor className="w-5 h-5" />,
    options: [
      { 
        value: 'mac', 
        label: 'macOS', 
        desc: 'MacBook, iMac, or Mac Studio' 
      },
      { 
        value: 'windows', 
        label: 'Windows', 
        desc: 'Windows 10 or 11' 
      },
      { 
        value: 'linux', 
        label: 'Linux', 
        desc: 'Ubuntu, Fedora, or other Linux distribution' 
      }
    ]
  },
  {
    id: 'shopifyExperience',
    question: 'How familiar are you with Shopify development?',
    type: 'single',
    icon: <Code className="w-5 h-5" />,
    options: [
      { 
        value: 'none', 
        label: 'No experience', 
        desc: 'Never worked with Shopify themes or Liquid' 
      },
      { 
        value: 'basic', 
        label: 'Basic knowledge', 
        desc: 'Some exposure to Shopify admin or basic theme edits' 
      },
      { 
        value: 'experienced', 
        label: 'Experienced', 
        desc: 'Built or modified Shopify themes before' 
      }
    ]
  },
  {
    id: 'role',
    question: 'What will be your primary role?',
    type: 'single', 
    icon: <Target className="w-5 h-5" />,
    options: [
      { 
        value: 'frontend', 
        label: 'Frontend Developer', 
        desc: 'Focus on UI/UX, styling, and user interactions' 
      },
      { 
        value: 'fullstack', 
        label: 'Full-Stack Developer', 
        desc: 'Work on both frontend and backend features' 
      },
      { 
        value: 'designer', 
        label: 'Designer/Developer', 
        desc: 'Design implementation and prototyping' 
      },
      { 
        value: 'content', 
        label: 'Content Manager', 
        desc: 'Managing site content and campaigns' 
      }
    ]
  },
  {
    id: 'tools',
    question: 'Which tools are you familiar with?',
    type: 'multiple',
    icon: <Zap className="w-5 h-5" />,
    options: [
      { 
        value: 'git', 
        label: 'Git/GitHub', 
        desc: 'Version control and collaboration' 
      },
      { 
        value: 'vscode', 
        label: 'VS Code', 
        desc: 'Code editor and extensions' 
      },
      { 
        value: 'terminal', 
        label: 'Command Line/Terminal', 
        desc: 'CLI tools and commands' 
      },
      { 
        value: 'shopify', 
        label: 'Shopify/Liquid', 
        desc: 'Shopify development experience' 
      },
      { 
        value: 'tailwind', 
        label: 'Tailwind CSS', 
        desc: 'Utility-first CSS framework' 
      },
      { 
        value: 'node', 
        label: 'Node.js/NPM', 
        desc: 'JavaScript runtime and package manager' 
      }
    ]
  },
  {
    id: 'goals',
    question: 'What are your immediate goals?',
    type: 'multiple',
    icon: <Target className="w-5 h-5" />,
    options: [
      { 
        value: 'setup', 
        label: 'Complete development setup', 
        desc: 'Get environment ready for development' 
      },
      { 
        value: 'firstTask', 
        label: 'Complete first task', 
        desc: 'Make your first code contribution' 
      },
      { 
        value: 'workflow', 
        label: 'Understand workflow', 
        desc: 'Learn git branching and deployment' 
      },
      { 
        value: 'architecture', 
        label: 'Learn codebase', 
        desc: 'Understand theme structure' 
      }
    ]
  }
];