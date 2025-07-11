# Team Onboarding System

A comprehensive, interactive onboarding system that generates personalized setup documentation for development team members. The system uses a questionnaire to create custom guides based on experience level, platform, role, and goals.

## Overview

This system replaces lengthy, one-size-fits-all documentation with an interactive questionnaire that generates personalized guides. Users answer questions about their experience, platform, and role, then receive a customized onboarding guide with only the relevant information for their specific situation.

### Key Features

- **Interactive Questionnaire**: Questions to understand user profile
- **Personalized Documentation**: Generates custom guides based on user responses
- **Platform Support**: macOS, Windows, and Linux setup instructions
- **Role-Specific Content**: Tailored for Frontend, Full-Stack, Designer, and Content roles
- **Experience Adaptive**: Appropriate guidance for Beginner, Intermediate, and Advanced developers
- **Interactive Progress Tracking**: Check off completed steps and track progress
- **Exportable Guides**: Download complete markdown documentation for offline use
- **Team Customizable**: Easy configuration for any team's specific needs

## How It Works

### 1. Interactive Questionnaire

Users start by answering a series of questions:

- **Experience Level**: Beginner (0-1 years), Intermediate (2-4 years), Advanced (5+ years)
- **Platform**: macOS, Windows, or Linux
- **Framework Experience**: No experience, Basic knowledge, or Experienced
- **Role**: Frontend Developer, Full-Stack Developer, Designer/Developer, or Content Manager
- **Tools Familiarity**: Git/GitHub, VS Code, Terminal, Framework, Tailwind CSS, Node.js/NPM
- **Goals**: Complete setup, First task, Understand workflow, Learn codebase

### 2. Personalized Guide Generation

Based on the questionnaire responses, the system generates a customized onboarding guide that includes:

- Platform-specific setup instructions
- Role-appropriate first tasks and workflows
- Experience-level guidance and explanations
- Only the tools and processes relevant to the user's profile
- Team-specific repository and communication information

### 3. Interactive Progress Tracking

Users can:
- Check off completed steps
- Track overall progress with a visual progress bar
- Download their personalized guide as a markdown file
- Start over to generate a new guide

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/mirabelle514/onboarding-your-team.git
cd onboarding-your-team

# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:5173` to see the interactive onboarding system.

### Basic Usage

```javascript
import OnboardingSystem from "./OnboardingSystem";

function App() {
  return <OnboardingSystem />;
}
```

## Team Configuration

### 1. Configure Your Team

Edit `config/team-config.js` to customize the system for your team:

```javascript
export const teamConfig = {
  team: {
    name: "Your Team Name",
    description: "A brief description of your team or organization",
    logo: "https://your-logo-url.com/logo.png", // Optional
    primaryColor: "#3B82F6",
    accentColor: "#1E40AF",
  },

  repository: {
    name: "your-main-project",
    organization: "your-organization",
    url: "https://github.com/your-organization/your-main-project",
    sshUrl: "git@github.com:your-organization/your-main-project.git",
    description: "Main project repository for development",
    baseFramework: "React", // Your framework
    cssFramework: "Tailwind CSS", // Your CSS framework
    buildTools: "NPM, Vite", // Your build tools
  },

  development: {
    nodeVersion: "18.0.0",
    packageManager: "npm", // "npm", "yarn", or "pnpm"
    requiredTools: ["git", "node", "npm"],
    optionalTools: ["docker", "redis", "postgresql"],
  },

  communication: {
    slack: "#your-team-channel",
    email: "team@yourcompany.com",
    documentation: "https://docs.yourcompany.com",
    wiki: "https://wiki.yourcompany.com",
  },
};
```

### 2. Customize Content

Add team-specific content in the `customSections` object:

```javascript
customSections: {
  teamSpecific: {
    title: "Team-Specific Setup",
    description: "Additional setup steps specific to your team",
    steps: [
      {
        id: "team-access",
        title: "Get Team Access",
        description: "Request access to team resources and tools",
        commands: [
          "# Request access to team resources",
          "# Contact your team lead for permissions",
        ],
        successCriteria: "Access granted to all team resources",
      },
    ],
  },
},
```

### 3. Update Repository Setup

The system automatically uses your team configuration for:
- Repository URLs and commands
- Package manager preferences
- Node.js version requirements
- Build tool configurations

## Project Structure

```
team-onboarding-system/
├── index.js                      # Main entry point and exports
├── OnboardingSystem.jsx          # Main React component
├── package.json                  # Dependencies and scripts
├── README.md                     # This file
│
├── config/
│   ├── team-config.js            # Team configuration
│   └── questionnaire.js          # Questionnaire configuration
│
├── docs/                         # Documentation modules
│   ├── PlatformSetups.js         # Platform setup (Mac/Windows/Linux)
│   ├── RoleConfigs.js            # Role-specific configurations
│   ├── ExperienceGuidance.js     # Experience level guidance
│   ├── DevelopmentWorkflow.js    # 3-terminal workflow documentation
│   ├── RepositorySetup.js        # Repository setup (uses team config)
│   ├── GitConfiguration.js      # Git setup and workflow
│   └── VSCodeSetup.js            # VS Code configuration
│
└── components/                   # Additional React components
    ├── ProgressTracker.jsx       # Progress tracking
    ├── CommandBlock.jsx          # Command display
    └── StepCard.jsx              # Individual steps
```

## Documentation Modules

### PlatformSetups.js

Platform-specific setup instructions for:

- **macOS**: Homebrew, Terminal, development tools
- **Windows**: PowerShell, installers, PATH configuration
- **Linux**: Package managers, permissions, repositories

### RoleConfigs.js

Role-specific configurations for:

- **Frontend Developer**: Component workflows, UI frameworks
- **Full-Stack Developer**: API integration, end-to-end development
- **Designer/Developer**: Design systems, design tool integration
- **Content Manager**: Content management workflows

### ExperienceGuidance.js

Experience-appropriate guidance:

- **Beginner**: Detailed explanations, extra safety nets
- **Intermediate**: Streamlined workflows, optimization tips
- **Advanced**: Leadership guidance, automation suggestions

### RepositorySetup.js

Automatically configured repository setup using your team configuration:
- Repository cloning with correct URLs
- Package manager setup (npm/yarn/pnpm)
- Build tool configuration
- Development server setup

## Extending the System

### Adding New Platforms

```javascript
// In docs/PlatformSetups.js
export const PlatformSetups = {
  // Existing platforms...

  chromeos: {
    title: "Chrome OS Development Setup",
    estimatedTime: "45-60 minutes",
    steps: [
      {
        id: "linux-container",
        title: "Enable Linux Development Environment",
        description: "Set up Linux container for development tools",
        commands: [
          "# Enable Linux in Chrome OS settings",
          "# Install development tools in Linux container",
        ],
        troubleshooting: [
          "Ensure Linux is enabled in Chrome OS settings",
          "Check container disk space allocation",
        ],
        successCriteria: "Linux terminal accessible and tools installed",
      },
    ],
  },
};
```

### Adding New Roles

```javascript
// In docs/RoleConfigs.js
export const RoleConfigs = {
  // Existing roles...

  mobile: {
    title: "Mobile Developer",
    description: "Mobile app development and responsive design",
    extensions: [
      "React Native Tools - Mobile development support",
      "Flutter - Mobile framework support",
    ],
    firstTasks: [
      {
        title: "Mobile Responsive Testing",
        difficulty: "Medium",
        time: "60 min",
        description: "Test application across mobile devices and viewports",
      },
    ],
    learningPath: [
      "Master responsive design principles",
      "Learn mobile-first development approach",
      "Practice touch interaction patterns",
    ],
  },
};
```

### Adding Custom Sections

Add team-specific sections in `config/team-config.js`:

```javascript
customSections: {
  yourCustomSection: {
    title: "Your Custom Section",
    description: "Description of your custom section",
    steps: [
      {
        id: "custom-step",
        title: "Custom Step",
        description: "Description of the custom step",
        commands: [
          "# Your custom commands",
          "your-custom-command",
        ],
        successCriteria: "Success criteria for this step",
      },
    ],
  },
},
```

## Configuration

### User Profile Options

The system supports these user profile options:

```javascript
const userProfile = {
  experience: "beginner" | "intermediate" | "advanced",
  platform: "mac" | "windows" | "linux",
  role: "frontend" | "fullstack" | "designer" | "content",
  tools: ["git", "vscode", "terminal", "node"],
  goals: ["setup", "firstTask", "workflow", "architecture"],
};
```

### Customizing the Questionnaire

Edit `config/questionnaire.jsx` to modify questions:

```javascript
export const questionnaire = [
  {
    id: "newQuestion",
    question: "Your new question?",
    type: "single" | "multiple",
    icon: <YourIcon className="w-5 h-5" />,
    options: [
      {
        value: "option1",
        label: "Option 1",
        desc: "Description of option 1",
      },
    ],
  },
];
```

## Generated Documentation

The system generates markdown documentation that includes:

- **Personalized welcome message with team branding**
- **Platform-specific setup instructions**
- **Role-appropriate first tasks**
- **Experience-level guidance**
- **Step-by-step commands with copy functionality**
- **Troubleshooting sections**
- **Success criteria for each step**
- **Estimated completion times**
- **Team contact information**

### Example Generated Guide Structure

```markdown
# Your Team Name Onboarding Guide

## Intermediate Frontend Developer - macOS

Welcome to Your Team Name! This guide is customized for your profile...

### 1. macOS Development Setup (30-45 minutes)

#### 1. Install Homebrew Package Manager

Homebrew simplifies installing development tools on macOS...

**Commands:**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Success Criteria:** `brew --version` shows version information
```

## Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run linting
npm run lint

# Run type checking (if using TypeScript)
npm run type-check
```

## Deployment

### Standalone App

```bash
# Build for production
npm run build

# Deploy to hosting platform
npm run deploy
```

### Integration with Existing System

```javascript
// Import and use as component
import OnboardingSystem from './OnboardingSystem';

function AdminDashboard() {
  return (
    <div>
      <h1>Team Admin</h1>
      <OnboardingSystem />
    </div>
  );
}
```

## Contributing

### Adding Documentation

1. **Create new documentation module** in `docs/` directory
2. **Export from `index.js`**
3. **Import in `OnboardingSystem.jsx`**
4. **Update document generation logic**
5. **Add tests for new module**

### Code Style

- Use ESLint and Prettier for consistent formatting
- Follow React best practices and hooks patterns
- Write descriptive commit messages
- Add JSDoc comments for complex functions

### Testing New Content

1. **Add new content to appropriate module**
2. **Test with different user profiles**
3. **Verify generated documentation accuracy**
4. **Check all platform/role combinations**
5. **Validate markdown export functionality**

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions about this onboarding system:

- **Team Lead**: Contact via Slack or email
- **Documentation Issues**: Create GitHub issue
- **Feature Requests**: Discuss in team channels

## Changelog

### v1.0.0 (2024-12-19)

- Initial release with modular architecture
- Support for Mac, Windows, and Linux platforms
- Role-specific configurations for all team roles
- Experience-adaptive guidance system
- Interactive progress tracking
- Markdown export functionality
- Team customization system

### Future Enhancements

- Video tutorials integration
- Real-time collaboration features
- Automated progress verification
- Integration with team management tools
- Multi-language support
- Mobile app version
- Team analytics and insights

## About

A flexible, customizable onboarding system designed to streamline developer onboarding for any team or organization.
