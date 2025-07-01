// docs/DevelopmentWorkflow.js

export const DevelopmentWorkflow = {
    title: "OSEA 3-Terminal Development Workflow",
    description: "The standard OSEA development setup uses three terminal windows running simultaneously for optimal productivity",
    
    overview: {
      concept: "Parallel Development Streams",
      explanation: "By running three terminals simultaneously, you can manage version control, preview changes live, and compile assets without interrupting your workflow",
      benefits: [
        "No need to stop and start development servers",
        "Immediate feedback on code changes",
        "Streamlined version control workflow",
        "Efficient asset compilation and optimization"
      ]
    },
  
    terminals: [
      {
        name: "Terminal 1: Git Operations & General Commands",
        purpose: "Version control, repository management, and general command execution",
        primaryUse: "All Git operations and miscellaneous tasks",
        
        commonCommands: [
          "git status",
          "git branch", 
          "git pull",
          "git add .",
          "git commit -m 'descriptive message'",
          "git push",
          "git checkout branch-name",
          "npm run build"
        ],
        
        workflow: [
          "Check current status before starting work",
          "Pull latest changes from remote",
          "Create or switch to feature branch",
          "Stage and commit changes as you work",
          "Push changes when ready for review"
        ],
        
        tips: [
          "Always check git status before committing",
          "Write clear, descriptive commit messages",
          "Pull frequently to avoid merge conflicts",
          "Use this terminal for any non-server commands"
        ],
        
        note: "This is your 'active' terminal for executing commands and managing Git workflow"
      },
      
      {
        name: "Terminal 2: Shopify CLI Development Server",
        purpose: "Live theme preview and Shopify development server",
        primaryUse: "Running shopify2 theme serve for local development",
        
        setupCommands: [
          "cd ocean-theme",
          "shopify2 login --store osea-malibu",
          "shopify2 theme serve"
        ],
        
        features: [
          "Live reload on file changes",
          "Hot CSS injection",
          "Theme synchronization with Shopify",
          "Browser preview at http://127.0.0.1:9292"
        ],
        
        workflow: [
          "Start server at beginning of development session",
          "Leave running throughout development",
          "Monitor for compilation errors",
          "Restart only if server becomes unresponsive"
        ],
        
        troubleshooting: [
          "If server won't start: check if another instance is running",
          "If changes don't appear: check file sync status",
          "If authentication fails: run shopify2 logout then login again",
          "If port conflict: stop other development servers"
        ],
        
        note: "Keep this terminal running - it provides your live preview at http://127.0.0.1:9292"
      },
      
      {
        name: "Terminal 3: Tailwind CSS Compiler",
        purpose: "CSS compilation, optimization, and asset processing",
        primaryUse: "Running npm run tailwind for CSS compilation",
        
        setupCommands: [
          "cd ocean-theme",
          "npm install",
          "npm run tailwind"
        ],
        
        features: [
          "Automatic CSS compilation on file changes",
          "Utility class purging for production",
          "CSS optimization and minification",
          "PostCSS processing and vendor prefixing"
        ],
        
        workflow: [
          "Start compiler after npm install",
          "Leave running throughout development",
          "Monitor for compilation errors",
          "Restart if CSS changes aren't reflecting"
        ],
        
        outputFiles: [
          "assets/application.css - Compiled main stylesheet",
          "assets/base.css - Base styles and resets", 
          "assets/component-*.css - Component-specific styles"
        ],
        
        troubleshooting: [
          "If CSS not compiling: check for syntax errors in source files",
          "If classes not working: ensure Tailwind is watching correct files",
          "If build fails: delete node_modules and reinstall",
          "If styles missing: check tailwind.config.js for proper paths"
        ],
        
        note: "Keep this terminal running - it automatically rebuilds CSS when you make changes"
      }
    ],
  
    setupSequence: {
      title: "Daily Setup Sequence",
      description: "Follow this sequence each time you start development",
      
      steps: [
        {
          step: 1,
          terminal: "Terminal 1",
          action: "Navigate to project and check Git status",
          commands: [
            "cd ocean-theme",
            "git status",
            "git pull"
          ]
        },
        {
          step: 2, 
          terminal: "Terminal 2",
          action: "Start Shopify development server",
          commands: [
            "cd ocean-theme",
            "shopify2 theme serve"
          ]
        },
        {
          step: 3,
          terminal: "Terminal 3", 
          action: "Start Tailwind CSS compiler",
          commands: [
            "cd ocean-theme",
            "npm run tailwind"
          ]
        },
        {
          step: 4,
          terminal: "Browser",
          action: "Open development preview",
          commands: [
            "Navigate to http://127.0.0.1:9292"
          ]
        }
      ]
    },
  
    branchingStrategy: {
      title: "OSEA Git Branching Strategy",
      description: "Understanding OSEA's branch structure and workflow",
      
      branches: {
        main: {
          purpose: "Production branch - live website",
          protection: "Protected - requires PR approval",
          deployment: "Automatically deploys to live site",
          usage: "Never commit directly - only merge via PR"
        },
        "main-2": {
          purpose: "Campaign branch for upcoming promotions",
          protection: "Semi-protected",
          deployment: "Preview environment available",
          usage: "Campaign assets and temporary features"
        },
        "main-3": {
          purpose: "Multi-stage campaign branch",
          protection: "Semi-protected", 
          deployment: "Preview environment available",
          usage: "Complex campaigns with multiple phases"
        },
        staging: {
          purpose: "Development branch for new features",
          protection: "Open for direct commits",
          deployment: "Development environment",
          usage: "Feature development and testing"
        }
      },
  
      workflow: [
        "Create feature branch from staging: git checkout -b feature/your-feature-name",
        "Develop your feature with regular commits",
        "Push feature branch: git push origin feature/your-feature-name", 
        "Create Pull Request to staging branch",
        "After review and approval, merge to staging",
        "Test in staging environment",
        "Create PR from staging to main for production deployment"
      ]
    },
  
    bestPractices: {
      terminalManagement: [
        "Use descriptive terminal tabs/windows names",
        "Keep terminals organized (Git, Shopify, Tailwind)",
        "Don't close terminals unnecessarily during development",
        "Use terminal multiplexers (tmux/screen) for advanced workflows"
      ],
      
      development: [
        "Test changes in multiple browsers and devices", 
        "Commit frequently with meaningful messages",
        "Pull latest changes before starting new features",
        "Use feature branches for all non-trivial changes"
      ],
      
      troubleshooting: [
        "Check all three terminals for error messages",
        "Restart development servers if things stop working",
        "Clear browser cache if styles aren't updating",
        "Use browser dev tools to debug CSS and JavaScript"
      ]
    },
  
    shortcuts: {
      git: [
        { command: "git status", shortcut: "git st" },
        { command: "git checkout", shortcut: "git co" },
        { command: "git branch", shortcut: "git br" },
        { command: "git commit -m", shortcut: "git cm" }
      ],
      
      vscode: [
        { action: "Open integrated terminal", shortcut: "Ctrl/Cmd + `" },
        { action: "Split terminal", shortcut: "Ctrl/Cmd + Shift + 5" },
        { action: "Switch between terminals", shortcut: "Ctrl/Cmd + PageUp/PageDown" },
        { action: "Kill terminal", shortcut: "Ctrl/Cmd + Shift + K" }
      ]
    }
  };