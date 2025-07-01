// docs/ExperienceGuidance.js

export const ExperienceGuidance = {
    beginner: {
      title: "Beginner Developer Path",
      description: "Comprehensive guidance with detailed explanations for new developers",
      
      tips: [
        "Take your time with each step - understanding is more important than speed",
        "Don't hesitate to ask questions in team channels - everyone was a beginner once",
        "Keep notes of new commands and processes as you learn them",
        "Practice Git commands in a test repository before working on real projects",
        "Use VS Code's integrated terminal to get comfortable with command line",
        "Focus on one concept at a time rather than trying to learn everything at once"
      ],
  
      expectations: {
        setupTime: "Expect setup to take 2-3 hours including learning time",
        learningCurve: "Plan for 2-4 weeks to become comfortable with the workflow",
        firstTask: "Your first task should be simple and well-defined",
        support: "Pair programming sessions are highly recommended"
      },
  
      resources: [
        { 
          title: "Git Basics Tutorial", 
          url: "https://git-scm.com/docs/gittutorial",
          description: "Official Git tutorial covering fundamental commands and concepts",
          priority: "high"
        },
        { 
          title: "Command Line Basics", 
          url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line",
          description: "Essential command line skills for developers",
          priority: "high"
        },
        { 
          title: "Shopify Liquid Basics", 
          url: "https://shopify.dev/api/liquid",
          description: "Introduction to Shopify's templating language",
          priority: "high"
        },
        { 
          title: "HTML & CSS Fundamentals", 
          url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
          description: "Web development fundamentals",
          priority: "medium"
        },
        { 
          title: "VS Code Tips and Tricks", 
          url: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks",
          description: "Get the most out of your code editor",
          priority: "medium"
        }
      ],
  
      commonChallenges: [
        {
          challenge: "Command line intimidation",
          solution: "Start with basic commands and use VS Code's integrated terminal",
          timeToResolve: "1-2 weeks of regular practice"
        },
        {
          challenge: "Git workflow confusion",
          solution: "Practice with a personal test repository and use VS Code's Git integration",
          timeToResolve: "2-3 weeks with guidance"
        },
        {
          challenge: "Understanding Liquid templating",
          solution: "Start with simple variable outputs before moving to complex logic",
          timeToResolve: "1-2 weeks of hands-on practice"
        }
      ],
  
      checkpoints: [
        {
          week: 1,
          goals: ["Complete development setup", "Successfully run first command", "Clone a repository"],
          skills: ["Basic terminal navigation", "Git clone command", "VS Code familiarity"]
        },
        {
          week: 2,
          goals: ["Make first code change", "Commit and push changes", "Understand file structure"],
          skills: ["Basic Liquid syntax", "Git add/commit/push", "File navigation"]
        },
        {
          week: 4,
          goals: ["Complete first feature", "Review pull request process", "Debug simple issues"],
          skills: ["Problem solving", "Code review participation", "Basic troubleshooting"]
        }
      ]
    },
  
    intermediate: {
      title: "Intermediate Developer Path", 
      description: "Streamlined guidance focusing on OSEA-specific workflows and best practices",
      
      tips: [
        "Focus on understanding OSEA's specific workflows and team conventions",
        "Learn the project structure and naming patterns used across repositories",
        "Set up development shortcuts and command aliases for increased efficiency",
        "Look for opportunities to optimize your development setup and processes",
        "Share knowledge with junior team members and ask questions about advanced topics",
        "Contribute to code reviews and team discussions about technical decisions"
      ],
  
      expectations: {
        setupTime: "Expect setup to take 1-2 hours with some customization",
        learningCurve: "Should be productive within 1-2 weeks",
        firstTask: "Can handle moderately complex features",
        support: "Mostly independent with occasional guidance"
      },
  
      resources: [
        { 
          title: "Advanced Git Workflows", 
          url: "https://www.atlassian.com/git/tutorials/comparing-workflows",
          description: "Understanding branching strategies and team collaboration",
          priority: "high"
        },
        { 
          title: "Tailwind CSS Best Practices", 
          url: "https://tailwindcss.com/docs/reusing-styles",
          description: "Efficient utility-first CSS development patterns",
          priority: "high"
        },
        { 
          title: "Shopify Theme Development", 
          url: "https://shopify.dev/themes",
          description: "Advanced theme development techniques and patterns",
          priority: "medium"
        },
        { 
          title: "JavaScript ES6+ Features", 
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          description: "Modern JavaScript features and best practices",
          priority: "medium"
        },
        { 
          title: "Web Performance Optimization", 
          url: "https://web.dev/performance/",
          description: "Techniques for optimizing web application performance",
          priority: "low"
        }
      ],
  
      focusAreas: [
        {
          area: "OSEA-Specific Patterns",
          description: "Learn team conventions, coding standards, and project architecture",
          timeInvestment: "First 2 weeks"
        },
        {
          area: "Workflow Optimization",
          description: "Set up efficient development environment and automation",
          timeInvestment: "Ongoing improvement"
        },
        {
          area: "Code Quality",
          description: "Master testing, code review, and debugging techniques",
          timeInvestment: "Continuous development"
        }
      ],
  
      checkpoints: [
        {
          week: 1,
          goals: ["Understand codebase architecture", "Set up efficient workflow", "Complete setup customization"],
          skills: ["Project navigation", "Development environment", "Team tools"]
        },
        {
          week: 2,
          goals: ["Implement medium complexity feature", "Participate in code reviews", "Optimize development setup"],
          skills: ["Feature development", "Code review", "Process improvement"]
        }
      ]
    },
  
    advanced: {
      title: "Advanced Developer Path",
      description: "Leadership-focused guidance for senior developers and technical contributors",
      
      tips: [
        "Consider automating repetitive setup and deployment tasks for the team",
        "Look for opportunities to improve team workflows, tooling, and documentation",
        "Share knowledge through mentoring junior developers and leading code reviews",
        "Contribute to technical decision-making and architecture discussions",
        "Evaluate and recommend new tools, technologies, and best practices",
        "Help establish and maintain coding standards and development guidelines"
      ],
  
      expectations: {
        setupTime: "Can complete setup in 30-60 minutes with advanced configuration",
        learningCurve: "Productive immediately, focused on optimization and leadership",
        firstTask: "Can handle complex features and architectural improvements",
        support: "Independent contributor and mentor to others"
      },
  
      resources: [
        { 
          title: "Advanced Shopify Development", 
          url: "https://shopify.dev/themes/tools/cli",
          description: "Advanced theme development, CLI tools, and automation",
          priority: "high"
        },
        { 
          title: "System Design Principles", 
          url: "https://github.com/donnemartin/system-design-primer",
          description: "Large-scale system design and architecture patterns",
          priority: "high"
        },
        { 
          title: "Team Leadership for Developers", 
          url: "https://www.oreilly.com/library/view/the-tech-lead/9781098116897/",
          description: "Technical leadership and team management skills",
          priority: "medium"
        },
        { 
          title: "Performance Monitoring", 
          url: "https://web.dev/performance-monitoring/",
          description: "Advanced performance analysis and optimization",
          priority: "medium"
        },
        { 
          title: "Security Best Practices", 
          url: "https://owasp.org/www-project-top-ten/",
          description: "Web application security guidelines and practices",
          priority: "low"
        }
      ],
  
      leadership: [
        {
          responsibility: "Mentoring",
          description: "Guide junior and intermediate developers through complex problems",
          impact: "Accelerates team learning and reduces knowledge silos"
        },
        {
          responsibility: "Architecture",
          description: "Design and review system architecture and technical decisions",
          impact: "Ensures scalable and maintainable codebase"
        },
        {
          responsibility: "Process Improvement",
          description: "Identify and implement improvements to development workflows",
          impact: "Increases team productivity and code quality"
        },
        {
          responsibility: "Knowledge Sharing",
          description: "Create documentation, conduct tech talks, and share best practices",
          impact: "Elevates entire team's technical capabilities"
        }
      ],
  
      initiatives: [
        "Set up automated testing and CI/CD pipelines",
        "Create development environment automation scripts",
        "Establish code review guidelines and standards",
        "Implement performance monitoring and optimization",
        "Design scalable component and pattern libraries",
        "Lead technical research and proof of concepts"
      ],
  
      checkpoints: [
        {
          timeframe: "First Month",
          goals: ["Assess current technical landscape", "Identify improvement opportunities", "Establish mentoring relationships"],
          deliverables: ["Technical assessment report", "Improvement roadmap", "Mentoring plan"]
        },
        {
          timeframe: "First Quarter",
          goals: ["Implement key improvements", "Lead major technical initiatives", "Establish thought leadership"],
          deliverables: ["Process improvements", "Technical leadership", "Knowledge sharing"]
        }
      ]
    }
  };