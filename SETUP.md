# Team Setup Guide

This guide will help you customize the onboarding system for your team.

## Quick Setup

### 1. Clone and Install

```bash
git clone https://github.com/mirabelle514/onboarding-your-team.git
cd onboarding-your-team
npm install
```

### 2. Configure Your Team

Copy the example configuration and customize it:

```bash
cp config/team-config.example.js config/team-config.js
```

Edit `config/team-config.js` with your team's information:

```javascript
export const teamConfig = {
  team: {
    name: "Your Team Name",
    description: "Your team description",
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

### 3. Add Custom Sections (Optional)

Add team-specific setup steps in the `customSections` object:

```javascript
customSections: {
  yourTeamSpecific: {
    title: "Your Team-Specific Setup",
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

### 4. Test Your Configuration

```bash
npm start
```

Visit `http://localhost:5173` to see your customized onboarding system.

## Customization Options

### Team Branding

- **Team Name**: Used throughout the system
- **Logo**: Optional team logo URL
- **Colors**: Primary and accent colors for branding
- **Description**: Brief team description

### Repository Configuration

- **Repository Name**: Your main project repository
- **Organization**: GitHub organization name
- **URLs**: Both HTTPS and SSH URLs for cloning
- **Framework Info**: Your tech stack details

### Development Environment

- **Node Version**: Required Node.js version
- **Package Manager**: npm, yarn, or pnpm
- **Required Tools**: Essential tools for your team
- **Optional Tools**: Additional tools that might be needed

### Communication

- **Slack Channel**: Team communication channel
- **Email**: Team contact email
- **Documentation**: Links to your docs
- **Wiki**: Internal knowledge base

### Custom Content

Add sections specific to your team's needs:

```javascript
customSections: {
  vpnSetup: {
    title: "VPN Setup",
    description: "Configure VPN access for development",
    steps: [
      {
        id: "install-vpn",
        title: "Install VPN Client",
        description: "Download and install the required VPN client",
        commands: [
          "# Download VPN client from internal portal",
          "# Install and configure VPN settings",
        ],
        successCriteria: "VPN connection established successfully",
      },
    ],
  },
  
  internalTools: {
    title: "Internal Tools Setup",
    description: "Set up team-specific development tools",
    steps: [
      {
        id: "install-cli",
        title: "Install Internal CLI",
        description: "Install and configure internal CLI tools",
        commands: [
          "npm install -g @yourcompany/cli",
          "yourcompany config set api-key YOUR_KEY",
        ],
        successCriteria: "CLI tool installed and configured",
      },
    ],
  },
},
```

## Advanced Configuration

### Customizing Questions

Edit `config/questionnaire.jsx` to add or modify questions:

```javascript
{
  id: 'teamSpecific',
  question: 'Do you need access to internal systems?',
  type: 'single',
  icon: <Shield className="w-5 h-5" />,
  options: [
    { 
      value: 'yes', 
      label: 'Yes', 
      desc: 'I need access to internal development systems' 
    },
    { 
      value: 'no', 
      label: 'No', 
      desc: 'I only need access to public repositories' 
    }
  ]
}
```

### Adding New Roles

Edit `docs/RoleConfigs.js` to add team-specific roles:

```javascript
mobile: {
  title: "Mobile Developer",
  description: "Mobile app development and responsive design",
  extensions: [
    "React Native Tools",
    "Flutter",
  ],
  firstTasks: [
    {
      title: "Mobile Testing Setup",
      difficulty: "Medium",
      time: "60 min",
      description: "Set up mobile device testing environment",
    },
  ],
},
```

### Adding New Platforms

Edit `docs/PlatformSetups.js` to add support for new platforms:

```javascript
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
      successCriteria: "Linux terminal accessible and tools installed",
    },
  ],
},
```

## Deployment

### Standalone Deployment

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.

### Integration with Existing App

```javascript
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

### Environment Variables

You can use environment variables for sensitive configuration:

```javascript
// In team-config.js
export const teamConfig = {
  communication: {
    slack: process.env.TEAM_SLACK_CHANNEL || "#general",
    email: process.env.TEAM_EMAIL || "team@company.com",
  },
};
```

## Best Practices

### 1. Keep It Simple

- Start with basic configuration
- Add custom sections gradually
- Test with real team members

### 2. Regular Updates

- Update repository URLs when they change
- Keep Node.js version requirements current
- Review and update custom sections regularly

### 3. Team Feedback

- Collect feedback from new team members
- Update content based on common issues
- Add troubleshooting steps for frequent problems

### 4. Documentation

- Keep your team configuration well-documented
- Document any custom sections you add
- Share configuration changes with the team

## Troubleshooting

### Common Issues

1. **Configuration not loading**: Check that `team-config.js` exists and exports correctly
2. **Repository URLs not working**: Verify SSH keys and repository access
3. **Custom sections not appearing**: Ensure sections are properly formatted
4. **Build errors**: Check for syntax errors in configuration files

### Getting Help

- Check the main README.md for detailed documentation
- Review the example configuration in `config/team-config.example.js`
- Create an issue on GitHub for bugs or feature requests

## Success!

Once configured, your team will have:

- Personalized onboarding for each developer
- Platform-specific setup instructions
- Role-appropriate guidance
- Team-specific customizations
- Interactive progress tracking
- Exportable documentation

Your onboarding system is now ready to streamline developer onboarding for your team! 