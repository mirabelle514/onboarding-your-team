// docs/RoleConfigs.js

export const RoleConfigs = {
    frontend: {
      title: "Frontend Developer",
      description: "UI/UX development, styling, and user interaction focus",
      
      extensions: [
        "Shopify Liquid - Syntax highlighting and validation for Liquid templates",
        "Tailwind CSS IntelliSense - Autocomplete and syntax highlighting for utility classes", 
        "Prettier - Automatic code formatting and style consistency",
        "Auto Rename Tag - Automatically rename paired HTML/XML tags",
        "Color Highlight - Visualize colors directly in your code",
        "Bracket Pair Colorizer - Colorize matching brackets for better readability"
      ],
  
      settings: {
        "editor.formatOnSave": true,
        "emmet.includeLanguages": {
          "liquid": "html"
        },
        "files.associations": {
          "*.liquid": "liquid"
        },
        "tailwindCSS.includeLanguages": {
          "liquid": "html"
        },
        "prettier.documentSelectors": ["**/*.liquid"]
      },
  
      firstTasks: [
        {
          title: "Explore Design System",
          difficulty: "Easy",
          time: "30 min",
          description: "Browse existing Tailwind components and understand OSEA's design system",
          files: ["assets/styles/", "sections/", "snippets/"],
          objectives: [
            "Understand Tailwind utility classes used in the project",
            "Identify common component patterns",
            "Review color palette and spacing scale"
          ]
        },
        {
          title: "Update Component Styling", 
          difficulty: "Medium",
          time: "45 min",
          description: "Modify button or card components to match current brand guidelines",
          files: ["snippets/button.liquid", "assets/application.css"],
          objectives: [
            "Practice Liquid template editing",
            "Apply Tailwind classes effectively",
            "Test responsive behavior"
          ]
        },
        {
          title: "Implement Responsive Feature",
          difficulty: "Hard",
          time: "90 min",
          description: "Create a new responsive component from design specs",
          files: ["sections/", "snippets/", "assets/"],
          objectives: [
            "Mobile-first responsive design",
            "Cross-browser compatibility",
            "Performance optimization"
          ]
        }
      ],
  
      learningPath: [
        "Master Tailwind utility classes and custom configuration",
        "Understand Shopify Liquid templating language and filters",
        "Learn responsive design patterns and mobile-first approach",
        "Practice component composition and reusability patterns",
        "Study accessibility best practices and WCAG guidelines",
        "Explore CSS Grid and Flexbox for complex layouts"
      ],
  
      keyFiles: [
        "assets/application.css - Main stylesheet and Tailwind imports",
        "assets/section-*.css - Section-specific styles",
        "snippets/ - Reusable component templates",
        "sections/ - Page section templates",
        "templates/ - Page layout templates",
        "config/settings_schema.json - Theme customization options"
      ],
  
      workflows: [
        "Start Tailwind compiler: npm run tailwind",
        "Start Shopify development server: shopify2 theme serve",
        "Make styling changes in Liquid templates",
        "Test responsive behavior in browser dev tools",
        "Commit changes with descriptive messages"
      ]
    },
  
    fullstack: {
      title: "Full-Stack Developer",
      description: "End-to-end development including frontend, backend, and integrations",
      
      extensions: [
        "Shopify Liquid - Template language support for theme development",
        "REST Client - API testing and development within VS Code",
        "GitLens - Enhanced Git capabilities and code history",
        "Thunder Client - Lightweight API testing tool",
        "JSON Tools - JSON formatting and validation",
        "Database Client - Database connections and queries"
      ],
  
      settings: {
        "editor.formatOnSave": true,
        "editor.codeActionsOnSave": {
          "source.fixAll": true
        },
        "files.associations": {
          "*.liquid": "liquid",
          "*.env.*": "dotenv"
        },
        "rest-client.requestNameAsKey": true
      },
  
      firstTasks: [
        {
          title: "API Integration Setup",
          difficulty: "Medium",
          time: "60 min",
          description: "Set up and test Shopify API connections and webhooks",
          files: ["assets/api.js", "config/settings_schema.json"],
          objectives: [
            "Configure Shopify API credentials",
            "Test REST API endpoints",
            "Set up webhook handlers"
          ]
        },
        {
          title: "Custom App Development",
          difficulty: "Hard",
          time: "2 hours",
          description: "Build a simple Shopify app integration feature",
          files: ["apps/", "config/", "assets/"],
          objectives: [
            "Understand Shopify app architecture",
            "Implement OAuth flow",
            "Create admin panel integration"
          ]
        }
      ],
  
      learningPath: [
        "Understand Shopify's architecture and API ecosystem",
        "Master both REST and GraphQL API development",
        "Learn webhook implementation and event handling",
        "Study authentication and authorization patterns",
        "Practice database design and optimization",
        "Explore deployment and CI/CD workflows"
      ],
  
      keyFiles: [
        "assets/api.js - API integration and HTTP requests",
        "config/settings_schema.json - App configuration",
        "snippets/admin-* - Admin panel components",
        "templates/admin/ - Admin interface templates",
        ".env files - Environment configuration",
        "package.json - Dependencies and scripts"
      ],
  
      workflows: [
        "Set up local development environment",
        "Configure API endpoints and authentication",
        "Develop and test API integrations",
        "Implement frontend consuming APIs",
        "Test end-to-end functionality"
      ]
    },
  
    designer: {
      title: "Designer/Developer",
      description: "Design implementation, prototyping, and design system maintenance",
      
      extensions: [
        "Color Highlight - Visualize colors directly in code",
        "Figma for VS Code - Design file integration and asset export",
        "Image Preview - Preview images inline in code",
        "CSS Peek - Navigate to CSS definitions quickly",
        "SVG Viewer - Preview and edit SVG files",
        "Design Tokens - Manage design tokens and variables"
      ],
  
      settings: {
        "editor.formatOnSave": true,
        "colorize.languages": ["css", "scss", "sass", "less", "liquid"],
        "svg.preview.mode": "svg",
        "files.associations": {
          "*.liquid": "liquid"
        }
      },
  
      firstTasks: [
        {
          title: "Design System Audit",
          difficulty: "Medium",
          time: "90 min",
          description: "Review current implementation vs design specifications",
          files: ["assets/styles/", "config/settings_schema.json"],
          objectives: [
            "Compare implemented vs designed components",
            "Identify inconsistencies in spacing and colors",
            "Document missing design tokens"
          ]
        },
        {
          title: "Component Documentation",
          difficulty: "Easy",
          time: "60 min",
          description: "Create visual documentation for design system components",
          files: ["docs/", "templates/component-library.liquid"],
          objectives: [
            "Document component variations",
            "Create usage guidelines",
            "Build component showcase page"
          ]
        }
      ],
  
      learningPath: [
        "Master design token implementation in code",
        "Learn component documentation and style guide creation",
        "Understand accessibility standards and testing methods",
        "Practice design-to-code workflows and handoff processes",
        "Study responsive design principles and breakpoint systems",
        "Explore animation and micro-interaction implementation"
      ],
  
      keyFiles: [
        "assets/styles/ - Design system and component styles",
        "config/settings_schema.json - Design customization options",
        "snippets/design-* - Design system components",
        "templates/design-system.liquid - Component showcase",
        "assets/icons/ - Icon system and SVG assets",
        "docs/design-guidelines.md - Design documentation"
      ],
  
      workflows: [
        "Export assets from Figma/design tools",
        "Implement designs with pixel-perfect accuracy",
        "Test across devices and browsers",
        "Document components and patterns",
        "Collaborate with design team on iterations"
      ]
    },
  
    content: {
      title: "Content Manager",
      description: "Content management, campaign setup, and editorial workflows",
      
      extensions: [
        "Shopify Liquid - Understanding template structure for content",
        "Markdown All in One - Documentation and content editing",
        "Spell Right - Content proofreading and spell checking",
        "Word Count - Track content length and reading time",
        "Todo Tree - Track content tasks and deadlines",
        "Image Optimize - Optimize images for web"
      ],
  
      settings: {
        "editor.wordWrap": "on",
        "editor.formatOnSave": true,
        "files.associations": {
          "*.liquid": "liquid",
          "*.md": "markdown"
        },
        "spellright.language": ["en"],
        "spellright.documentTypes": ["markdown", "liquid", "plaintext"]
      },
  
      firstTasks: [
        {
          title: "Content Workflow Training",
          difficulty: "Easy",
          time: "45 min",
          description: "Learn the content publishing and review process",
          files: ["templates/", "sections/", "config/"],
          objectives: [
            "Understand content structure in Liquid templates",
            "Learn Shopify admin content management",
            "Practice content preview and publishing"
          ]
        },
        {
          title: "Campaign Asset Management",
          difficulty: "Easy",
          time: "30 min",
          description: "Practice uploading and organizing campaign assets",
          files: ["assets/", "content/"],
          objectives: [
            "Organize campaign assets efficiently",
            "Optimize images for web performance",
            "Set up content scheduling"
          ]
        }
      ],
  
      learningPath: [
        "Master Shopify admin interface and content management",
        "Learn campaign coordination and asset management",
        "Understand SEO best practices and implementation",
        "Practice quality assurance and content testing",
        "Study content strategy and editorial calendars",
        "Explore content automation and workflows"
      ],
  
      keyFiles: [
        "templates/ - Page layouts and content structure",
        "sections/ - Content blocks and modules",
        "config/settings_schema.json - Content customization",
        "assets/images/ - Campaign and content assets",
        "locales/ - Multi-language content",
        "content/ - Editorial content and documentation"
      ],
  
      workflows: [
        "Review content requirements and specifications",
        "Create and organize content in Shopify admin",
        "Test content across different devices",
        "Collaborate with design and development teams",
        "Schedule and publish content campaigns"
      ]
    }
  };