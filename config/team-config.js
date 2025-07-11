// config/team-config.js
// Team-specific configuration for the onboarding system

export const teamConfig = {
  // Basic team information
  team: {
    name: "Your Team Name",
    description: "A brief description of your team or organization",
    logo: null, // URL to team logo (optional)
    primaryColor: "#3B82F6", // Primary brand color
    accentColor: "#1E40AF", // Secondary brand color
  },

  // Repository configuration
  repository: {
    name: "main-project",
    organization: "your-organization",
    url: "https://github.com/your-organization/main-project",
    sshUrl: "git@github.com:your-organization/main-project.git",
    description: "Main project repository for development",
    baseFramework: "Your Framework", // e.g., "React", "Vue", "Angular"
    cssFramework: "Your CSS Framework", // e.g., "Tailwind CSS", "Bootstrap"
    buildTools: "Your Build Tools", // e.g., "NPM, Vite, Webpack"
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
    slack: "#your-team-channel",
    email: "team@yourcompany.com",
    documentation: "https://docs.yourcompany.com",
    wiki: "https://wiki.yourcompany.com",
  },

  // Custom content sections
  customSections: {
    // Add custom sections specific to your team
    // These will be merged with the default sections
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