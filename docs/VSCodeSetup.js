// docs/VSCodeSetup.js

export const VSCodeSetup = {
    title: "Visual Studio Code Configuration for OSEA",
    description: "Complete VS Code setup with extensions, settings, and workflow optimization for OSEA development",
    
    overview: {
      purpose: "Optimize VS Code for Shopify theme development with Tailwind CSS",
      focus: ["Liquid templating", "Tailwind CSS", "Git integration", "Development workflow"],
      estimatedTime: "20-30 minutes"
    },
  
    steps: [
      {
        id: "essential-extensions",
        title: "Install Essential Extensions",
        description: "Core extensions required for OSEA development workflow",
        
        extensions: [
          {
            name: "Shopify Liquid",
            id: "Shopify.theme-check-vscode",
            description: "Syntax highlighting, validation, and IntelliSense for Liquid templates",
            priority: "required",
            features: [
              "Liquid syntax highlighting",
              "Template validation and error detection",
              "Auto-completion for Liquid tags and filters",
              "Integration with Shopify Theme Check"
            ]
          },
          {
            name: "Tailwind CSS IntelliSense",
            id: "bradlc.vscode-tailwindcss",
            description: "Autocomplete, syntax highlighting, and linting for Tailwind classes",
            priority: "required",
            features: [
              "Intelligent autocomplete for utility classes",
              "Hover previews for CSS values",
              "Syntax highlighting for class names",
              "CSS conflict detection"
            ]
          },
          {
            name: "Prettier - Code formatter",
            id: "esbenp.prettier-vscode",
            description: "Automatic code formatting for consistent style",
            priority: "required",
            features: [
              "Auto-formatting on save",
              "Consistent code style across team",
              "Support for HTML, CSS, JavaScript, JSON",
              "Customizable formatting rules"
            ]
          }
        ],
        
        installationMethods: [
          {
            method: "VS Code Marketplace",
            steps: [
              "Open VS Code",
              "Click Extensions icon (Ctrl/Cmd+Shift+X)",
              "Search for extension name",
              "Click Install button"
            ]
          },
          {
            method: "Command Line",
            steps: [
              'code --install-extension Shopify.theme-check-vscode',
              'code --install-extension bradlc.vscode-tailwindcss',
              'code --install-extension esbenp.prettier-vscode'
            ]
          }
        ],
        
        successCriteria: "All three essential extensions installed and enabled"
      },
  
      {
        id: "recommended-extensions",
        title: "Install Recommended Extensions",
        description: "Additional extensions that enhance the development experience",
        
        extensions: [
          {
            name: "GitLens",
            id: "eamodio.gitlens",
            description: "Enhanced Git capabilities and code history visualization",
            benefits: ["Inline blame annotations", "Git history exploration", "Repository insights"]
          },
          {
            name: "Auto Rename Tag",
            id: "formulahendry.auto-rename-tag",
            description: "Automatically rename paired HTML/XML tags",
            benefits: ["Faster HTML editing", "Prevents mismatched tags", "Works with Liquid"]
          },
          {
            name: "Bracket Pair Colorizer 2",
            id: "CoenraadS.bracket-pair-colorizer-2",
            description: "Colorize matching brackets for better readability",
            benefits: ["Visual bracket matching", "Improved code readability", "Nested structure clarity"]
          },
          {
            name: "Color Highlight",
            id: "naumovs.color-highlight",
            description: "Highlight color values in CSS and code",
            benefits: ["Visual color preview", "Easier color management", "Design system validation"]
          },
          {
            name: "Live Server",
            id: "ritwickdey.LiveServer",
            description: "Local development server with live reload",
            benefits: ["Quick HTML preview", "Live reload", "Alternative to Shopify CLI for static files"]
          }
        ],
        
        roleSpecific: {
          frontend: ["Color Highlight", "Auto Rename Tag", "Live Server"],
          fullstack: ["GitLens", "REST Client", "Thunder Client"],
          designer: ["Color Highlight", "SVG Viewer", "Image Preview"],
          content: ["Spell Right", "Word Count", "Markdown All in One"]
        },
        
        successCriteria: "Role-appropriate extensions installed based on your development focus"
      },
  
      {
        id: "workspace-settings",
        title: "Configure Workspace Settings",
        description: "Set up VS Code settings optimized for OSEA development",
        
        settings: {
          "editor.formatOnSave": {
            value: true,
            description: "Automatically format code when saving files"
          },
          "editor.codeActionsOnSave": {
            value: { "source.fixAll": true },
            description: "Run code fixes automatically on save"
          },
          "emmet.includeLanguages": {
            value: { "liquid": "html" },
            description: "Enable Emmet abbreviations in Liquid files"
          },
          "files.associations": {
            value: { "*.liquid": "liquid" },
            description: "Associate .liquid files with Liquid language"
          },
          "tailwindCSS.includeLanguages": {
            value: { "liquid": "html" },
            description: "Enable Tailwind IntelliSense in Liquid files"
          },
          "prettier.documentSelectors": {
            value: ["**/*.liquid"],
            description: "Enable Prettier formatting for Liquid files"
          },
          "editor.wordWrap": {
            value: "on",
            description: "Wrap long lines for better readability"
          },
          "editor.minimap.enabled": {
            value: false,
            description: "Hide minimap for cleaner interface"
          },
          "workbench.colorTheme": {
            value: "Default Dark+",
            description: "Recommended dark theme for reduced eye strain"
          }
        },
        
        settingsFile: {
          location: ".vscode/settings.json in project root",
          purpose: "Project-specific settings that apply to all team members",
          example: `{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    },
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
  }`
        },
        
        successCriteria: "Settings configured and Liquid files properly highlighted and formatted"
      },
  
      {
        id: "snippets-setup",
        title: "Set Up Custom Snippets",
        description: "Create custom code snippets for common OSEA patterns",
        
        liquidSnippets: {
          "Liquid Comment": {
            prefix: "lcomment",
            body: ["{% comment %}", "\t$1", "{% endcomment %}"],
            description: "Liquid comment block"
          },
          "Liquid For Loop": {
            prefix: "lfor",
            body: ["{% for ${1:item} in ${2:collection} %}", "\t$3", "{% endfor %}"],
            description: "Liquid for loop"
          },
          "Liquid If Statement": {
            prefix: "lif",
            body: ["{% if ${1:condition} %}", "\t$2", "{% endif %}"],
            description: "Liquid if statement"
          },
          "Liquid Assign": {
            prefix: "lassign",
            body: ["{% assign ${1:variable} = ${2:value} %}"],
            description: "Liquid variable assignment"
          },
          "Section Schema": {
            prefix: "schema",
            body: [
              "{% schema %}",
              "{",
              "\t\"name\": \"$1\",",
              "\t\"settings\": [",
              "\t\t$2",
              "\t]",
              "}",
              "{% endschema %}"
            ],
            description: "Shopify section schema"
          }
        },
        
        setupSteps: [
          "Open VS Code",
          "Press Ctrl/Cmd+Shift+P to open command palette",
          "Type 'Preferences: Configure User Snippets'",
          "Select 'liquid.json' (create if doesn't exist)",
          "Add the provided snippet definitions",
          "Save the file"
        ],
        
        successCriteria: "Custom snippets work when typing prefixes in Liquid files"
      },
  
      {
        id: "keyboard-shortcuts",
        title: "Optimize Keyboard Shortcuts",
        description: "Set up efficient keyboard shortcuts for OSEA development workflow",
        
        essentialShortcuts: [
          {
            action: "Open integrated terminal",
            shortcut: "Ctrl/Cmd + `",
            usage: "Quick access to terminal for Git commands"
          },
          {
            action: "Split terminal",
            shortcut: "Ctrl/Cmd + Shift + 5",
            usage: "Create multiple terminals for 3-terminal workflow"
          },
          {
            action: "Toggle sidebar",
            shortcut: "Ctrl/Cmd + B",
            usage: "Show/hide file explorer for more coding space"
          },
          {
            action: "Quick open file",
            shortcut: "Ctrl/Cmd + P",
            usage: "Quickly navigate to any file in project"
          },
          {
            action: "Command palette",
            shortcut: "Ctrl/Cmd + Shift + P",
            usage: "Access all VS Code commands and extensions"
          },
          {
            action: "Go to definition",
            shortcut: "F12",
            usage: "Navigate to CSS definitions and Liquid includes"
          },
          {
            action: "Format document",
            shortcut: "Shift + Alt + F",
            usage: "Manually format code when auto-format is disabled"
          }
        ],
        
        customShortcuts: [
          {
            action: "Open terminal and run Tailwind",
            suggestion: "Ctrl/Cmd + Alt + T",
            keybinding: {
              "key": "ctrl+alt+t",
              "command": "workbench.action.terminal.sendSequence",
              "args": { "text": "npm run tailwind\n" }
            }
          },
          {
            action: "Open terminal and run Shopify serve",
            suggestion: "Ctrl/Cmd + Alt + S",
            keybinding: {
              "key": "ctrl+alt+s", 
              "command": "workbench.action.terminal.sendSequence",
              "args": { "text": "shopify2 theme serve\n" }
            }
          }
        ],
        
        successCriteria: "Comfortable with essential shortcuts and custom shortcuts configured"
      }
    ],
  
    workflowOptimization: {
      title: "Optimize VS Code for OSEA Workflow",
      
      layout: {
        title: "Recommended Layout",
        setup: [
          "Split editor vertically for Liquid templates and CSS",
          "Keep integrated terminal at bottom with 3 terminal instances",
          "Use file explorer sidebar for quick navigation",
          "Pin frequently used files as tabs"
        ]
      },
      
      workspaceFiles: {
        title: "Project Workspace Configuration",
        files: [
          {
            file: ".vscode/settings.json",
            purpose: "Project-specific settings for all team members",
            contains: ["Formatting rules", "File associations", "Extension configurations"]
          },
          {
            file: ".vscode/extensions.json",
            purpose: "Recommended extensions for the project", 
            contains: ["Required extensions list", "Installation prompts for new team members"]
          },
          {
            file: ".vscode/tasks.json",
            purpose: "Custom build tasks and commands",
            contains: ["Tailwind build task", "Shopify serve task", "Git workflow shortcuts"]
          }
        ]
      },
      
      productivity: {
        title: "Productivity Tips",
        tips: [
          "Use Ctrl/Cmd+P to quickly open files instead of clicking through folders",
          "Set up multiple cursor editing with Ctrl/Cmd+D for bulk changes",
          "Use Ctrl/Cmd+Shift+F for project-wide search and replace",
          "Create .liquid file templates for common section patterns",
          "Use the Problems panel to quickly identify and fix Liquid template issues",
          "Leverage IntelliSense for Tailwind classes to avoid typos and discover utilities"
        ]
      }
    },
  
    troubleshooting: {
      title: "Common VS Code Issues",
      
      issues: [
        {
          problem: "Liquid files not syntax highlighted",
          cause: "Shopify Liquid extension not installed or .liquid files not associated",
          solution: "Install Shopify Liquid extension and check file associations in settings",
          prevention: "Ensure all team members install required extensions"
        },
        
        {
          problem: "Tailwind classes not autocompleting",
          cause: "Tailwind CSS IntelliSense not configured for Liquid files",
          solution: "Add liquid to tailwindCSS.includeLanguages in settings",
          prevention: "Use project-wide .vscode/settings.json for consistent configuration"
        },
        
        {
          problem: "Prettier not formatting Liquid files",
          cause: "Prettier doesn't recognize .liquid files by default",
          solution: "Add liquid to prettier.documentSelectors in settings",
          prevention: "Include Liquid formatting in project settings"
        },
        
        {
          problem: "Extensions not working consistently",
          cause: "Different extension versions or missing dependencies",
          solution: "Use .vscode/extensions.json to specify required extensions",
          prevention: "Keep extensions updated and use workspace recommendations"
        }
      ]
    },
  
    teamCollaboration: {
      title: "Team Collaboration Features",
      
      liveShare: {
        description: "VS Code Live Share for pair programming and code reviews",
        benefits: ["Real-time collaboration", "Shared debugging sessions", "Remote pair programming"],
        setup: "Install Live Share extension and sign in with GitHub account"
      },
      
      codeReview: {
        description: "GitHub Pull Requests extension for in-editor code reviews",
        benefits: ["Review PRs without leaving VS Code", "Inline comments and suggestions", "Branch management"],
        workflow: ["Install GitHub Pull Requests extension", "Authenticate with GitHub", "Review and comment on PRs"]
      },
      
      consistency: {
        description: "Maintaining consistent development environment across team",
        practices: [
          "Use .vscode/settings.json for project settings",
          "Define required extensions in .vscode/extensions.json",
          "Document custom snippets and shortcuts",
          "Regular team sync on tool updates and best practices"
        ]
      }
    }
  };