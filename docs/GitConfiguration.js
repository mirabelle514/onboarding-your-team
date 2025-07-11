// docs/GitConfiguration.js

import { teamConfig, replacePlaceholders } from '../config/team-config.js';

export const GitConfiguration = {
    title: "Git Setup and Configuration",
    description: replacePlaceholders("Complete Git configuration including identity setup, SSH keys, and {teamName} workflows"),
    
    overview: {
      purpose: replacePlaceholders("Version control and collaboration for {teamName} development"),
      requirements: ["Git identity configuration", "SSH key setup", "GitHub access", replacePlaceholders("{teamName} workflow understanding")],
      estimatedTime: "15-30 minutes"
    },
  
    steps: [
      {
        id: "git-identity",
        title: "Configure Git Identity",
        description: "Set up your name and email for Git commits using your OSEA email address",
        
        commands: [
          '# Set your name (use your full name)',
          'git config --global user.name "Your Full Name"',
          '',
          '# Set your email (use your team email)',
          `git config --global user.email "your.email@${teamConfig.communication.email.split('@')[1] || 'company.com'}"`,
          '',
          '# Verify your configuration',
          'git config --global --list | grep user'
        ],
        
        explanation: [
          "Your name appears in commit history and pull requests",
          replacePlaceholders("Use your professional {teamName} email address"),
          "Global configuration applies to all repositories on your machine",
          "These settings can be overridden per repository if needed"
        ],
        
        troubleshooting: [
          "If email is wrong: Re-run the email command with correct address",
          "If name has spaces: Use quotes around the full name",
          "To change later: Simply re-run the commands with new values"
        ],
        
        successCriteria: replacePlaceholders("git config --global --list shows your correct name and {teamName} email")
      },
  
      {
        id: "ssh-key-generation",
        title: "Generate SSH Key for GitHub",
        description: "Create an SSH key pair for secure authentication with GitHub",
        
        commands: [
          '# Generate a new SSH key (use your team email)',
          `ssh-keygen -t ed25519 -C "your.email@${teamConfig.communication.email.split('@')[1] || 'company.com'}"`,
          '',
          '# When prompted for file location, press Enter for default',
          '# When prompted for passphrase, you can press Enter for no passphrase',
          '# (or set a passphrase for extra security)',
          '',
          '# Start the SSH agent',
          'eval "$(ssh-agent -s)"',
          '',
          '# Add your SSH key to the agent',
          'ssh-add ~/.ssh/id_ed25519'
        ],
        
        platformNotes: {
          mac: [
            "On macOS, you might want to add to keychain:",
            'ssh-add --apple-use-keychain ~/.ssh/id_ed25519'
          ],
          windows: [
            "On Windows, use Git Bash or PowerShell",
            "Make sure SSH agent is running"
          ],
          linux: [
            "Standard ssh-keygen should work on all distributions",
            "Ensure SSH agent starts automatically"
          ]
        },
        
        troubleshooting: [
          "If ssh-keygen not found: Install OpenSSH client",
          "If permission denied: Check file permissions on ~/.ssh/",
          "If agent not running: Start with eval \"$(ssh-agent -s)\""
        ],
        
        successCriteria: "SSH key generated and added to agent without errors"
      },
  
      {
        id: "github-ssh-setup",
        title: "Add SSH Key to GitHub",
        description: "Copy your public key and add it to your GitHub account for authentication",
        
        commands: [
          '# Copy your public key to clipboard',
          '',
          '# On macOS:',
          'pbcopy < ~/.ssh/id_ed25519.pub',
          '',
          '# On Linux:',
          'cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard',
          '# (or just cat ~/.ssh/id_ed25519.pub and copy manually)',
          '',
          '# On Windows:',
          'clip < ~/.ssh/id_ed25519.pub',
          '',
          '# Then go to GitHub and add the key'
        ],
        
        githubSteps: [
          "Go to GitHub.com and sign in to your account",
          "Click your profile picture → Settings",
          "Click 'SSH and GPG keys' in the left sidebar",
          "Click 'New SSH key' button",
          replacePlaceholders("Give it a title like '{teamName} Development Machine'"),
          "Paste your public key in the 'Key' field",
          "Click 'Add SSH key'"
        ],
        
        verification: [
          "Test your SSH connection to GitHub:",
          'ssh -T git@github.com',
          '',
          "You should see a message like:",
          "'Hi username! You've successfully authenticated, but GitHub does not provide shell access.'"
        ],
        
        troubleshooting: [
          "If clipboard commands fail: Manually copy the key from cat output",
          "If GitHub rejects key: Ensure you copied the entire key including ssh-ed25519",
          "If SSH test fails: Check that key was added correctly to GitHub"
        ],
        
        successCriteria: "SSH test to GitHub succeeds with authentication confirmation"
      },
  
      {
        id: "git-configuration-optimized",
        title: "Optimize Git Configuration",
        description: "Set up additional Git configurations for better development experience",
        
        commands: [
          '# Set default branch name to main',
          'git config --global init.defaultBranch main',
          '',
          '# Enable colored output',
          'git config --global color.ui auto',
          '',
          '# Set VS Code as default editor',
          'git config --global core.editor "code --wait"',
          '',
          '# Configure line endings (important for cross-platform work)',
          '# On Mac/Linux:',
          'git config --global core.autocrlf input',
          '',
          '# On Windows:',
          'git config --global core.autocrlf true',
          '',
          '# Set up useful aliases',
          'git config --global alias.st status',
          'git config --global alias.co checkout',
          'git config --global alias.br branch',
          'git config --global alias.cm "commit -m"',
          'git config --global alias.last "log -1 HEAD"'
        ],
        
        explanation: [
          replacePlaceholders("Default branch 'main' matches {teamName} repository structure"),
          "Colored output makes Git easier to read",
          "VS Code integration for commit messages and conflict resolution",
          "Line ending configuration prevents cross-platform issues",
          "Aliases speed up common Git operations"
        ],
        
        additionalAliases: [
          'git config --global alias.unstage "reset HEAD --"',
          'git config --global alias.visual "!gitk"',
          'git config --global alias.graph "log --oneline --graph --decorate --all"'
        ],
        
        successCriteria: replacePlaceholders("Git configuration optimized for {teamName} development workflow")
      }
    ],
  
    teamWorkflow: {
      title: replacePlaceholders("{teamName} Git Workflow"),
      description: replacePlaceholders("Understanding how {teamName} uses Git for collaboration and deployment"),
      
      branchStructure: {
        main: {
          purpose: "Production branch - powers the live website",
          protection: "Protected - requires pull request and review",
          deployment: "Automatically deploys to live site",
          rules: ["Never commit directly", "All changes via PR", "Must pass CI/CD checks"]
        },
        "main-2": {
          purpose: "Campaign branch for promotional content",
          protection: "Semi-protected - team leads can commit directly",
          deployment: "Preview environment available",
          rules: ["Used for campaign assets", "Temporary promotional features"]
        },
        "main-3": {
          purpose: "Secondary campaign branch for complex promotions",
          protection: "Semi-protected",
          deployment: "Preview environment available", 
          rules: ["Multi-phase campaigns", "Extended promotional periods"]
        },
        staging: {
          purpose: "Development branch for new features",
          protection: "Open - developers can commit directly",
          deployment: "Development environment",
          rules: ["Feature development", "Testing new functionality", "Base for feature branches"]
        }
      },
  
      dailyWorkflow: [
        {
          step: 1,
          action: "Start with latest changes",
          commands: ["git checkout staging", "git pull origin staging"]
        },
        {
          step: 2,
          action: "Create feature branch",
          commands: ["git checkout -b feature/your-feature-name"]
        },
        {
          step: 3,
          action: "Develop and commit",
          commands: ["git add .", "git commit -m 'Clear description of changes'"]
        },
        {
          step: 4,
          action: "Push and create PR",
          commands: ["git push origin feature/your-feature-name", "# Create PR on GitHub"]
        },
        {
          step: 5,
          action: "After review, merge to staging",
          commands: ["# Merge via GitHub interface", "git checkout staging", "git pull"]
        }
      ]
    },
  
    bestPractices: {
      title: "Git Best Practices for OSEA",
      
      commits: [
        "Write clear, descriptive commit messages",
        "Commit logical chunks of work, not everything at once",
        "Use present tense: 'Add feature' not 'Added feature'",
        "Reference issue numbers when applicable",
        "Keep commits focused on a single concern"
      ],
      
      branches: [
        "Use descriptive branch names: feature/add-product-carousel",
        "Delete branches after merging to keep repository clean",
        "Regularly pull from staging to stay current",
        "Don't work directly on main, main-2, or main-3",
        "Create feature branches from staging, not main"
      ],
      
      collaboration: [
        "Pull before pushing to avoid conflicts",
        "Communicate with team about major changes",
        "Review pull requests thoroughly",
        "Test changes locally before creating PR",
        "Use draft PRs for work-in-progress"
      ]
    },
  
    troubleshooting: {
      title: "Common Git Issues and Solutions",
      
      issues: [
        {
          problem: "Authentication failed when pushing",
          cause: "SSH key not set up or GitHub access issues",
          solution: "Verify SSH key is added to GitHub and test with ssh -T git@github.com",
          prevention: "Keep SSH keys up to date and don't share them"
        },
        
        {
          problem: "Merge conflicts when pulling",
          cause: "Local changes conflict with remote changes",
          solution: "Stash local changes, pull, then apply stash or resolve conflicts manually",
          prevention: "Pull frequently and communicate about overlapping work"
        },
        
        {
          problem: "Accidentally committed to wrong branch",
          cause: "Not checking current branch before committing",
          solution: "Use git cherry-pick to move commits or reset and recommit",
          prevention: "Always check git status and current branch before committing"
        },
        
        {
          problem: "Can't push to protected branch",
          cause: "Trying to push directly to main or protected branch",
          solution: "Create feature branch and submit pull request instead",
          prevention: "Follow OSEA branching workflow and use feature branches"
        }
      ]
    }
  };