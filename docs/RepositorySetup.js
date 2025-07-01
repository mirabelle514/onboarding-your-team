// docs/RepositorySetup.js

export const RepositorySetup = {
    title: "OSEA Ocean Theme Repository Setup",
    description: "Clone and configure the main OSEA theme repository for local development",
    
    overview: {
      repository: "ocean-theme",
      organization: "osea-malibu", 
      baseTheme: "Shopify Dawn Theme",
      cssFramework: "Tailwind CSS",
      buildTools: "NPM, esbuild, PostCSS"
    },
  
    steps: [
      {
        id: "clone-repo",
        title: "Clone Repository and Navigate",
        description: "Get the Ocean Theme code on your local machine and navigate to the project directory",
        
        commands: [
          '# Clone the OSEA Ocean Theme repository',
          'git clone git@github.com:osea-malibu/ocean-theme.git',
          '',
          '# Navigate to the project directory',
          'cd ocean-theme',
          '',
          '# Verify you\'re in the right place',
          'ls -la'
        ],
        
        expectedOutput: [
          "You should see files like:",
          "- package.json (project dependencies)",
          "- tailwind.config.js (Tailwind configuration)",
          "- assets/ (stylesheets and scripts)",
          "- sections/ (theme sections)",
          "- templates/ (page templates)",
          "- snippets/ (reusable components)"
        ],
        
        troubleshooting: [
          "If 'Permission denied': Ensure SSH key is set up with GitHub",
          "If 'Repository not found': Verify you have access to osea-malibu organization",
          "If clone is slow: Check your internet connection",
          "If SSH fails: Try HTTPS clone temporarily: git clone https://github.com/osea-malibu/ocean-theme.git"
        ],
        
        successCriteria: "Repository cloned successfully and you can see the project files"
      },
  
      {
        id: "install-dependencies",
        title: "Install Project Dependencies", 
        description: "Install all required NPM packages for development including Tailwind CSS and build tools",
        
        commands: [
          '# Install all project dependencies',
          'npm install',
          '',
          '# This installs:',
          '# - Tailwind CSS and PostCSS',
          '# - esbuild for JavaScript bundling', 
          '# - Development and build tools',
          '',
          '# Verify installation completed successfully',
          'npm list --depth=0'
        ],
        
        packages: [
          "@tailwindcss/forms - Form styling utilities",
          "@tailwindcss/typography - Typography plugin", 
          "esbuild - JavaScript bundler",
          "postcss - CSS transformation tool",
          "autoprefixer - CSS vendor prefixing"
        ],
        
        troubleshooting: [
          "If npm install fails: Delete node_modules and package-lock.json, then retry",
          "If permission errors: Don't use sudo, fix npm permissions instead",
          "If network errors: Check internet connection or try different registry",
          "If dependency conflicts: Clear npm cache with 'npm cache clean --force'"
        ],
        
        successCriteria: "All dependencies installed without errors and node_modules directory created"
      },
  
      {
        id: "verify-build",
        title: "Verify Build Process",
        description: "Test that all build tools are working correctly by running the build process",
        
        commands: [
          '# Run the build process to verify everything works',
          'npm run build',
          '',
          '# This should:',
          '# - Compile Tailwind CSS',
          '# - Bundle JavaScript files',
          '# - Process assets',
          '',
          '# Check that assets were generated',
          'ls assets/'
        ],
        
        expectedAssets: [
          "application.css - Compiled main stylesheet",
          "application.js - Bundled JavaScript",
          "base.css - Base styles and resets"
        ],
        
        troubleshooting: [
          "If build fails: Check Node.js version (should be 16+ recommended)",
          "If CSS errors: Check tailwind.config.js for syntax errors",
          "If JavaScript errors: Check for syntax errors in source files",
          "If missing files: Ensure all dependencies installed correctly"
        ],
        
        successCriteria: "Build completes without errors and generates expected asset files"
      },
  
      {
        id: "test-development-servers",
        title: "Test Development Servers",
        description: "Verify that both Shopify CLI and Tailwind compiler can start successfully",
        
        commands: [
          '# Test Tailwind compiler (run in one terminal)',
          'npm run tailwind',
          '# Should show: "Watching for changes..."',
          '',
          '# Test Shopify CLI in another terminal',
          'shopify2 login --store osea-malibu',
          'shopify2 theme serve',
          '# Should show development server URL'
        ],
        
        verification: [
          "Tailwind compiler starts without errors",
          "Shopify CLI authenticates successfully", 
          "Development server starts on http://127.0.0.1:9292",
          "Browser preview loads without critical errors"
        ],
        
        troubleshooting: [
          "If Shopify login fails: Check store permissions and network connection",
          "If theme serve fails: Ensure no other instances are running",
          "If Tailwind watch fails: Check file permissions and paths",
          "If port conflicts: Stop other development servers or use different ports"
        ],
        
        successCriteria: "Both development servers start successfully and theme preview is accessible"
      }
    ],
  
    projectStructure: {
      title: "Understanding the Project Structure",
      description: "Key directories and files in the Ocean Theme repository",
      
      directories: {
        "assets/": {
          purpose: "Stylesheets, JavaScript, images, and other static assets",
          keyFiles: [
            "application.css - Main compiled stylesheet",
            "application.js - Main JavaScript bundle",
            "base.css - Reset and base styles",
            "section-*.css - Section-specific styles"
          ]
        },
        
        "config/": {
          purpose: "Theme configuration and settings",
          keyFiles: [
            "settings_schema.json - Theme customization options",
            "settings_data.json - Default theme settings"
          ]
        },
        
        "layout/": {
          purpose: "Theme layout templates",
          keyFiles: [
            "theme.liquid - Main layout wrapper",
            "password.liquid - Password page layout"
          ]
        },
        
        "sections/": {
          purpose: "Reusable page sections and blocks",
          keyFiles: [
            "header.liquid - Site header",
            "footer.liquid - Site footer", 
            "hero-banner.liquid - Homepage hero",
            "product-*.liquid - Product page sections"
          ]
        },
        
        "snippets/": {
          purpose: "Small reusable components and partials",
          keyFiles: [
            "product-card.liquid - Product card component",
            "button.liquid - Button component",
            "icon.liquid - Icon system"
          ]
        },
        
        "templates/": {
          purpose: "Page-level templates",
          keyFiles: [
            "index.liquid - Homepage template",
            "product.liquid - Product page template",
            "collection.liquid - Collection page template"
          ]
        }
      }
    },
  
    nextSteps: {
      title: "What to Do After Setup",
      immediate: [
        "Explore the project structure and key files",
        "Run through the 3-terminal development workflow",
        "Make a small test change to verify everything works",
        "Set up your VS Code extensions and settings"
      ],
      
      shortTerm: [
        "Complete your first assigned task or tutorial",
        "Familiarize yourself with the existing components",
        "Learn the Git workflow and branching strategy",
        "Set up any additional development tools"
      ],
      
      ongoing: [
        "Stay updated with team conventions and standards",
        "Contribute to documentation and knowledge sharing",
        "Optimize your development workflow over time",
        "Help onboard future team members"
      ]
    },
  
    commonIssues: {
      title: "Common Setup Issues and Solutions",
      
      issues: [
        {
          problem: "Repository access denied",
          cause: "Not added to osea-malibu GitHub organization",
          solution: "Contact team lead to add you to the organization",
          prevention: "Verify access before starting setup"
        },
        
        {
          problem: "NPM install fails with permission errors",
          cause: "NPM installed with sudo or incorrect permissions",
          solution: "Fix NPM permissions or use a Node version manager",
          prevention: "Install Node.js without sudo, use nvm for version management"
        },
        
        {
          problem: "Shopify CLI authentication fails",
          cause: "Network restrictions or incorrect store name",
          solution: "Check network settings and verify store name is 'osea-malibu'",
          prevention: "Ensure stable internet connection and correct credentials"
        },
        
        {
          problem: "Build process fails",
          cause: "Outdated Node.js version or corrupted dependencies",
          solution: "Update Node.js to LTS version and reinstall dependencies",
          prevention: "Use Node.js LTS version and keep dependencies updated"
        }
      ]
    }
  };