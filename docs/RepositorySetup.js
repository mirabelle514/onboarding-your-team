// docs/RepositorySetup.js
import { teamConfig, replacePlaceholders } from '../config/team-config.js';

export const RepositorySetup = {
    title: replacePlaceholders("Repository Setup"),
    description: replacePlaceholders("Clone and configure the main {repositoryName} repository for local development"),
    
    overview: {
      repository: teamConfig.repository.name,
      organization: teamConfig.repository.organization, 
      baseFramework: teamConfig.repository.baseFramework,
      cssFramework: teamConfig.repository.cssFramework,
      buildTools: teamConfig.repository.buildTools
    },
  
    steps: [
      {
        id: "clone-repo",
        title: "Clone Repository and Navigate",
        description: "Get the project code on your local machine and navigate to the project directory",
        
        commands: [
          `# Clone the ${teamConfig.repository.name} repository`,
          `git clone ${teamConfig.repository.sshUrl}`,
          '',
          '# Navigate to the project directory',
          `cd ${teamConfig.repository.name}`,
          '',
          '# Verify you\'re in the right place',
          'ls -la'
        ],
        
        expectedOutput: [
          "You should see files like:",
          "- package.json (project dependencies)",
          "- README.md (project documentation)",
          "- src/ (source code directory)",
          "- public/ (static assets)",
          "- config/ (configuration files)"
        ],
        
        troubleshooting: [
          "If 'Permission denied': Ensure SSH key is set up with GitHub",
          `If 'Repository not found': Verify you have access to ${teamConfig.repository.organization} organization`,
          "If clone is slow: Check your internet connection",
          `If SSH fails: Try HTTPS clone temporarily: git clone ${teamConfig.repository.url}`
        ],
        
        successCriteria: "Repository cloned successfully and you can see the project files"
      },
  
      {
        id: "install-dependencies",
        title: "Install Project Dependencies", 
        description: `Install all required ${teamConfig.development.packageManager.toUpperCase()} packages for development`,
        
        commands: [
          `# Install all project dependencies`,
          `${teamConfig.development.packageManager} install`,
          '',
          '# This installs:',
          '# - Project dependencies',
          '# - Development tools',
          '# - Build tools',
          '',
          '# Verify installation completed successfully',
          `${teamConfig.development.packageManager} list --depth=0`
        ],
        
        packages: [
          "Core project dependencies",
          "Development tools and utilities",
          "Build and bundling tools",
          "Testing frameworks",
          "Linting and formatting tools"
        ],
        
        troubleshooting: [
          `If ${teamConfig.development.packageManager} install fails: Delete node_modules and lock file, then retry`,
          "If permission errors: Don't use sudo, fix permissions instead",
          "If network errors: Check internet connection or try different registry",
          "If dependency conflicts: Clear cache and retry installation"
        ],
        
        successCriteria: "All dependencies installed without errors and node_modules directory created"
      },
  
      {
        id: "verify-build",
        title: "Verify Build Process",
        description: "Test that all build tools are working correctly by running the build process",
        
        commands: [
          '# Run the build process to verify everything works',
          `${teamConfig.development.packageManager} run build`,
          '',
          '# This should:',
          '# - Compile source code',
          '# - Bundle assets',
          '# - Generate build artifacts',
          '',
          '# Check that build artifacts were generated',
          'ls dist/ || ls build/ || ls public/'
        ],
        
        expectedAssets: [
          "Compiled JavaScript files",
          "Processed CSS files", 
          "Optimized assets",
          "Build configuration files"
        ],
        
        troubleshooting: [
          `If build fails: Check Node.js version (should be ${teamConfig.development.nodeVersion}+)`,
          "If compilation errors: Check for syntax errors in source files",
          "If missing dependencies: Ensure all packages installed correctly",
          "If configuration errors: Check build configuration files"
        ],
        
        successCriteria: "Build completes without errors and generates expected build files"
      },
  
      {
        id: "test-development-servers",
        title: "Test Development Servers",
        description: "Verify that development server can start successfully",
        
        commands: [
          '# Start development server',
          `${teamConfig.development.packageManager} run dev`,
          '# Should show development server URL',
          '',
          '# Alternative commands if dev doesn\'t work:',
          `${teamConfig.development.packageManager} run start`,
          '# or',
          `${teamConfig.development.packageManager} run serve`
        ],
        
        verification: [
          "Development server starts without errors",
          "Server accessible on localhost (usually http://localhost:3000 or http://localhost:5173)",
          "Browser preview loads without critical errors",
          "Hot reload works when making changes"
        ],
        
        troubleshooting: [
          "If server fails to start: Check port availability and configuration",
          "If authentication required: Follow team-specific authentication setup",
          "If port conflicts: Stop other development servers or use different ports",
          "If build errors: Check console for specific error messages"
        ],
        
        successCriteria: "Development server starts successfully and application is accessible in browser"
      }
    ],
  
    projectStructure: {
      title: "Understanding the Project Structure",
      description: `Key directories and files in the ${teamConfig.repository.name} repository`,
      
      directories: {
        "src/": {
          purpose: "Source code and application logic",
          keyFiles: [
            "main.js/main.ts - Application entry point",
            "App.js/App.tsx - Main application component",
            "components/ - Reusable UI components",
            "utils/ - Utility functions and helpers"
          ]
        },
        
        "public/": {
          purpose: "Static assets and public files",
          keyFiles: [
            "index.html - Main HTML template",
            "favicon.ico - Site favicon",
            "assets/ - Images, fonts, and other static files"
          ]
        },
        
        "config/": {
          purpose: "Configuration files and settings",
          keyFiles: [
            "package.json - Project dependencies and scripts",
            "vite.config.js/webpack.config.js - Build configuration",
            "tailwind.config.js - CSS framework configuration"
          ]
        },
        
        "docs/": {
          purpose: "Project documentation",
          keyFiles: [
            "README.md - Project overview and setup",
            "CONTRIBUTING.md - Contribution guidelines",
            "CHANGELOG.md - Version history"
          ]
        }
      }
    },
  
    troubleshooting: {
      commonIssues: [
        {
          problem: "Repository access denied",
          solution: `Contact your team lead to ensure you have access to the ${teamConfig.repository.organization} organization`,
          prevention: "Verify GitHub account is properly configured with SSH keys"
        },
        {
          problem: "Build process fails",
          solution: "Check Node.js version and clear dependency cache",
          prevention: "Use the exact Node.js version specified in the project"
        },
        {
          problem: "Development server won't start",
          solution: "Check for port conflicts and verify all dependencies are installed",
          prevention: "Read the project README for specific setup requirements"
        }
      ]
    }
};