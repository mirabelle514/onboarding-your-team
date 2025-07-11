// index.js - Main entry point for Team Onboarding System

// Import all documentation modules
export { PlatformSetups } from './docs/PlatformSetups';
export { RoleConfigs } from './docs/RoleConfigs';
export { ExperienceGuidance } from './docs/ExperienceGuidance';
export { DevelopmentWorkflow } from './docs/DevelopmentWorkflow';
export { RepositorySetup } from './docs/RepositorySetup';
export { GitConfiguration } from './docs/GitConfiguration';
export { VSCodeSetup } from './docs/VSCodeSetup';

// Import configuration
export { questionnaire } from './config/questionnaire.jsx';
export { teamConfig, getTeamContent, replacePlaceholders } from './config/team-config.js';

// Import main component
export { default as OnboardingSystem } from './OnboardingSystem';

/*
PROJECT STRUCTURE:

team-onboarding-system/
├── index.js                          # Main entry point and exports
├── OnboardingSystem.jsx              # Main React component
├── package.json                      # Dependencies and scripts
├── README.md                         # Project documentation
│
├── config/
│   ├── team-config.js                # Team configuration
│   └── questionnaire.js              # Questionnaire configuration
│
├── docs/                             # Documentation modules
│   ├── PlatformSetups.js             # Platform-specific setup (Mac/Windows/Linux)
│   ├── RoleConfigs.js                # Role-specific configurations
│   ├── ExperienceGuidance.js         # Experience level guidance
│   ├── DevelopmentWorkflow.js        # 3-terminal workflow documentation
│   ├── RepositorySetup.js            # Repository setup (uses team config)
│   ├── GitConfiguration.js          # Git setup and workflow
│   └── VSCodeSetup.js                # VS Code configuration
│
├── components/                       # Additional React components (if needed)
│   ├── ProgressTracker.jsx           # Progress tracking component
│   ├── CommandBlock.jsx              # Command display component
│   └── StepCard.jsx                  # Individual step component
│
├── utils/                            # Utility functions
│   ├── documentGenerator.js          # Markdown generation utilities
│   ├── progressManager.js            # Progress tracking utilities
│   └── validators.js                 # Input validation utilities
│
├── styles/                           # Additional styles (if using external CSS)
│   ├── onboarding.css                # Custom styles
│   └── components.css                # Component-specific styles
│
└── assets/                           # Static assets
    ├── images/                       # Screenshots and diagrams
    ├── icons/                        # Custom icons
    └── templates/                    # Document templates

USAGE EXAMPLES:

// Import specific modules
import { PlatformSetups } from './docs/PlatformSetups';
import { RoleConfigs } from './docs/RoleConfigs';
import { teamConfig } from './config/team-config.js';

// Use in component
const macSetup = PlatformSetups.mac;
const frontendConfig = RoleConfigs.frontend;

// Import main component
import OnboardingSystem from './OnboardingSystem';

// Use in app
function App() {
  return <OnboardingSystem />;
}

EXTENDING THE SYSTEM:

1. Adding new platforms:
   - Edit docs/PlatformSetups.js
   - Add new platform object with steps array
   - Update questionnaire.js if needed

2. Adding new roles:
   - Edit docs/RoleConfigs.js
   - Add new role configuration
   - Update questionnaire.js options

3. Adding new experience levels:
   - Edit docs/ExperienceGuidance.js
   - Add new experience level with appropriate guidance
   - Update questionnaire.js options

4. Adding new tools/workflows:
   - Create new file in docs/ directory
   - Export from index.js
   - Import in OnboardingSystem.jsx
   - Update document generation logic

5. Customizing for your team:
   - Edit config/team-config.js
   - Update team information, repository details, and communication channels
   - Add custom sections specific to your team

MAINTENANCE:

- Each documentation module is independent
- Easy to update individual sections without affecting others
- Clear separation of concerns
- TypeScript support can be added by changing extensions to .ts/.tsx
- Tests can be added in __tests__ directory

DEPLOYMENT:

- Can be deployed as standalone React app
- Can be integrated into existing team admin dashboard
- Documentation can be exported as static markdown files
- Can be packaged as NPM module for reuse

*/

// Version information
export const VERSION = '1.0.0';
export const LAST_UPDATED = '2024-12-19';

// Configuration constants
export const CONFIG = {
  // Default settings for the onboarding system
  DEFAULT_PLATFORM: 'mac',
  DEFAULT_EXPERIENCE: 'intermediate',
  DEFAULT_ROLE: 'frontend',
  
  // Supported platforms, roles, and experience levels
  SUPPORTED_PLATFORMS: ['mac', 'windows', 'linux'],
  SUPPORTED_ROLES: ['frontend', 'fullstack', 'designer', 'content'],
  SUPPORTED_EXPERIENCE_LEVELS: ['beginner', 'intermediate', 'advanced'],
  
  // Documentation settings
  DOCUMENTATION: {
    format: 'markdown',
    includeMetadata: true,
    includeProgress: true,
    includeTimestamps: true
  }
};

// Utility functions for system management
export const utils = {
  // Validate user answers against supported options
  validateAnswers: (answers) => {
    const errors = [];
    
    if (answers.platform && !CONFIG.SUPPORTED_PLATFORMS.includes(answers.platform)) {
      errors.push(`Unsupported platform: ${answers.platform}`);
    }
    
    if (answers.role && !CONFIG.SUPPORTED_ROLES.includes(answers.role)) {
      errors.push(`Unsupported role: ${answers.role}`);
    }
    
    if (answers.experience && !CONFIG.SUPPORTED_EXPERIENCE_LEVELS.includes(answers.experience)) {
      errors.push(`Unsupported experience level: ${answers.experience}`);
    }
    
    return errors;
  },
  
  // Get estimated total time based on user profile
  getEstimatedTime: (answers) => {
    let baseTime = 60; // minutes
    
    // Adjust based on experience
    if (answers.experience === 'beginner') baseTime += 30;
    if (answers.experience === 'advanced') baseTime -= 15;
    
    // Adjust based on platform
    if (answers.platform === 'windows') baseTime += 15;
    if (answers.platform === 'linux') baseTime += 10;
    
    // Adjust based on familiarity with tools
    const tools = answers.tools || [];
    if (!tools.includes('git')) baseTime += 20;
    if (!tools.includes('vscode')) baseTime += 10;
    if (!tools.includes('terminal')) baseTime += 15;
    
    return baseTime;
  },
  
  // Generate file name for downloaded guide
  generateFileName: (userProfile) => {
    const date = new Date().toISOString().split('T')[0];
    const platform = userProfile.platform || 'unknown';
    const role = userProfile.role || 'developer';
    
    return replacePlaceholders(teamConfig.export.filename
      .replace('{teamName}', teamConfig.team.name)
      .replace('{role}', role)
      .replace('{date}', date));
  }
};