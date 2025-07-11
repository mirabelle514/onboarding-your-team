// config/team-config.example.js
// Example team configuration - Copy this file to team-config.js and customize

export const teamConfig = {
  // Basic team information
  team: {
    name: "Acme Development Team",
    description: "A dynamic team building innovative web applications",
    logo: "https://acme.com/logo.png", // Optional: URL to team logo
    primaryColor: "#3B82F6", // Primary brand color
    accentColor: "#1E40AF", // Secondary brand color
  },

  // Repository configuration
  repository: {
    name: "acme-web-app",
    organization: "acme-corp",
    url: "https://github.com/acme-corp/acme-web-app",
    sshUrl: "git@github.com:acme-corp/acme-web-app.git",
    description: "Main web application repository",
    baseFramework: "React", // Your framework (React, Vue, Angular, etc.)
    cssFramework: "Tailwind CSS", // Your CSS framework
    buildTools: "NPM, Vite", // Your build tools
  },

  // Development environment
  development: {
    nodeVersion: "18.0.0",
    packageManager: "npm", // "npm", "yarn", or "pnpm"
    requiredTools: ["git", "node", "npm"],
    optionalTools: ["docker", "redis", "postgresql"],
  },

  // Communication and resources
  communication: {
    slack: "#acme-dev-team",
    email: "dev-team@acme.com",
    documentation: "https://docs.acme.com",
    wiki: "https://wiki.acme.com",
  },

  // Custom content sections
  customSections: {
    // Add custom sections specific to your team
    // These will be merged with the default sections
    acmeSpecific: {
      title: "Acme-Specific Setup",
      description: "Additional setup steps specific to Acme development",
      steps: [
        {
          id: "acme-access",
          title: "Get Acme Access",
          description: "Request access to Acme development resources and tools",
          commands: [
            "# Request access to Acme development resources",
            "# Contact your team lead for permissions",
            "# Set up Acme VPN if required",
          ],
          successCriteria: "Access granted to all Acme development resources",
        },
        {
          id: "acme-tools",
          title: "Install Acme Development Tools",
          description: "Install team-specific development tools and utilities",
          commands: [
            "# Install Acme CLI tool",
            "npm install -g @acme/cli",
            "",
            "# Configure Acme CLI",
            "acme config set api-key YOUR_API_KEY",
          ],
          successCriteria: "Acme CLI installed and configured successfully",
        },
      ],
    },
  },

  // Welcome message customization
  welcome: {
    title: "Welcome to {teamName}",
    subtitle: "Developer Onboarding System",
    description: "Personalized setup documentation for {teamName} development team members",
    footer: "Need help? Contact {teamEmail} or ask in {slackChannel}",
  },

  // Export customization
  export: {
    filename: "{teamName}-onboarding-{role}-{date}.md",
    includeTeamInfo: true,
    includeContactInfo: true,
  },
};

// Helper function to get team-specific content
export const getTeamContent = (key, defaultValue = "") => {
  const keys = key.split('.');
  let value = teamConfig;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return defaultValue;
    }
  }
  
  return value;
};

// Helper function to replace placeholders in text
export const replacePlaceholders = (text) => {
  if (!text) return text;
  
  return text
    .replace(/{teamName}/g, teamConfig.team.name)
    .replace(/{teamEmail}/g, teamConfig.communication.email)
    .replace(/{slackChannel}/g, teamConfig.communication.slack)
    .replace(/{repositoryName}/g, teamConfig.repository.name)
    .replace(/{organization}/g, teamConfig.repository.organization);
}; 