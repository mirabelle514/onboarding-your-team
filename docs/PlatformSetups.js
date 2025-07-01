// docs/PlatformSetups.js

export const PlatformSetups = {
    mac: {
      title: "macOS Development Setup",
      estimatedTime: "30-45 minutes",
      description: "Complete development environment setup for macOS using Homebrew package manager",
      steps: [
        {
          id: "homebrew",
          title: "Install Homebrew Package Manager",
          description: "Homebrew simplifies installing development tools on macOS and is essential for our workflow",
          commands: [
            '# Install Homebrew (this may take 5-10 minutes)',
            '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
            '',
            '# Add Homebrew to your PATH (follow the instructions shown after installation)',
            'echo \'export PATH="/opt/homebrew/bin:$PATH"\' >> ~/.zshrc',
            'source ~/.zshrc',
            '',
            '# Verify installation',
            'brew --version'
          ],
          troubleshooting: [
            "Install Xcode Command Line Tools if prompted: xcode-select --install",
            "Restart Terminal after installation and PATH updates",
            "For older Intel Macs, Homebrew installs to /usr/local instead of /opt/homebrew",
            "If you see 'command not found', make sure to run the PATH export commands"
          ],
          successCriteria: "brew --version shows version information without errors"
        },
        {
          id: "node-git",
          title: "Install Node.js and Git",
          description: "Install Node.js runtime, NPM package manager, and Git version control",
          commands: [
            '# Install Node.js (includes NPM)',
            'brew install node',
            '',
            '# Install Git',
            'brew install git',
            '',
            '# Verify all installations',
            'node --version',
            'npm --version', 
            'git --version'
          ],
          troubleshooting: [
            "If any command is not found, restart Terminal",
            "For Node.js version management, consider installing nvm: brew install nvm",
            "Git might already be installed via Xcode - brew will update it"
          ],
          successCriteria: "All three commands (node, npm, git) return version numbers"
        },
        {
          id: "shopify-cli",
          title: "Install Shopify CLI",
          description: "Install Shopify CLI version 2.x for local theme development",
          commands: [
            '# Add Shopify tap to Homebrew',
            'brew tap shopify/shopify',
            '',
            '# Install Shopify CLI 2.x (important: we need version 2, not 3)',
            'brew install shopify-cli@2',
            '',
            '# Verify installation',
            'shopify2 version'
          ],
          troubleshooting: [
            "Ensure you install version 2.x specifically - this is important for compatibility",
            "The command should be 'shopify2', not just 'shopify'",
            "If command not found, restart Terminal"
          ],
          successCriteria: "shopify2 version returns version information"
        },
        {
          id: "vscode",
          title: "Install Visual Studio Code",
          description: "Install VS Code editor with command line integration",
          commands: [
            '# Install VS Code via Homebrew',
            'brew install --cask visual-studio-code',
            '',
            '# Enable command line usage',
            '# Open VS Code, then press Cmd+Shift+P and type "Shell Command: Install code command in PATH"',
            '',
            '# Verify command line integration',
            'code --version'
          ],
          troubleshooting: [
            "If code command not available, manually add to PATH or use VS Code command palette",
            "Alternative: Download from code.visualstudio.com if Homebrew fails",
            "Restart Terminal after PATH changes"
          ],
          successCriteria: "code --version works in Terminal and VS Code opens"
        }
      ]
    },
  
    windows: {
      title: "Windows Development Setup",
      estimatedTime: "45-60 minutes",
      description: "Complete development environment setup for Windows using installers and PowerShell",
      steps: [
        {
          id: "node",
          title: "Install Node.js and NPM",
          description: "Download and install Node.js which includes NPM package manager",
          commands: [
            '# Download Node.js installer',
            '# Visit: https://nodejs.org/en/download/',
            '# Choose "Windows Installer (.msi)" for your system (64-bit recommended)',
            '# Run the installer with administrator privileges',
            '',
            '# After installation, open PowerShell and verify:',
            'node --version',
            'npm --version'
          ],
          troubleshooting: [
            "Restart PowerShell or Command Prompt after installation",
            "Run as Administrator if you encounter permission errors",
            "If 'node' is not recognized, add Node.js to PATH manually via System Properties",
            "Make sure to install the LTS (Long Term Support) version"
          ],
          successCriteria: "Both node and npm commands return version numbers in PowerShell"
        },
        {
          id: "git",
          title: "Install Git for Windows",
          description: "Install Git with Windows integration and Git Bash terminal",
          commands: [
            '# Download Git installer',
            '# Visit: https://git-scm.com/download/win',
            '# Run git-for-windows-setup.exe',
            '',
            '# During installation, recommended settings:',
            '# - Use Git from the command line and also from 3rd-party software',
            '# - Checkout Windows-style, commit Unix-style line endings',
            '# - Use Windows default console window',
            '',
            '# After installation, verify in PowerShell:',
            'git --version'
          ],
          troubleshooting: [
            "Choose 'Git from the command line and 3rd-party software' during installation",
            "Select appropriate line ending options for cross-platform compatibility",
            "Use Git Bash for Unix-style commands, PowerShell for Windows commands",
            "Restart PowerShell after installation"
          ],
          successCriteria: "git --version works in both PowerShell and Git Bash"
        },
        {
          id: "shopify-cli",
          title: "Install Shopify CLI",
          description: "Install Shopify development tools for Windows",
          commands: [
            '# Method 1: Download installer (recommended)',
            '# Visit: https://github.com/Shopify/shopify-cli/releases/latest',
            '# Download shopify-cli-setup.exe',
            '# Run with administrator privileges',
            '',
            '# Method 2: PowerShell install',
            'iwr https://github.com/Shopify/shopify-cli/releases/latest/download/shopify-cli-setup.exe -OutFile shopify-cli-setup.exe',
            '.\\shopify-cli-setup.exe',
            '',
            '# Verify installation',
            'shopify version'
          ],
          troubleshooting: [
            "Run PowerShell as Administrator for installation",
            "If execution policy errors occur: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser",
            "Restart PowerShell after installation",
            "May need to add Shopify CLI to PATH manually"
          ],
          successCriteria: "shopify version returns version information in PowerShell"
        },
        {
          id: "vscode",
          title: "Install Visual Studio Code",
          description: "Install Microsoft's VS Code editor with Windows integration",
          commands: [
            '# Download VS Code installer',
            '# Visit: https://code.visualstudio.com/download',
            '# Choose "Windows" installer',
            '# Run VSCodeUserSetup-{version}.exe',
            '',
            '# During installation, recommended options:',
            '# ✓ Add "Open with Code" action to Windows Explorer file context menu',
            '# ✓ Add "Open with Code" action to Windows Explorer directory context menu', 
            '# ✓ Register Code as an editor for supported file types',
            '# ✓ Add to PATH (requires shell restart)',
            '',
            '# Verify installation',
            'code --version'
          ],
          troubleshooting: [
            "Restart PowerShell if code command is not found",
            "Install with administrator rights for system-wide access",
            "PATH integration requires shell restart"
          ],
          successCriteria: "code --version works in PowerShell and VS Code opens"
        }
      ]
    },
  
    linux: {
      title: "Linux Development Setup",
      estimatedTime: "30-45 minutes",
      description: "Complete development environment setup for Linux using package managers",
      steps: [
        {
          id: "update",
          title: "Update Package Manager",
          description: "Ensure your system packages are up to date before installing development tools",
          commands: [
            '# Ubuntu/Debian systems',
            'sudo apt update && sudo apt upgrade -y',
            '',
            '# RHEL/CentOS/Fedora systems',
            'sudo yum update -y  # or sudo dnf update -y for newer versions',
            '',
            '# Arch Linux',
            'sudo pacman -Syu --noconfirm'
          ],
          troubleshooting: [
            "Ensure you have sudo privileges on your system",
            "If package manager is locked, wait for automatic updates to complete",
            "Some systems may require entering your password for sudo commands"
          ],
          successCriteria: "System packages updated without errors"
        },
        {
          id: "development-tools",
          title: "Install Development Tools",
          description: "Install Node.js, NPM, Git, and essential build tools",
          commands: [
            '# Ubuntu/Debian - install basic tools',
            'sudo apt install -y nodejs npm git curl wget build-essential',
            '',
            '# For latest Node.js version via NodeSource (recommended):',
            'curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -',
            'sudo apt-get install -y nodejs',
            '',
            '# RHEL/CentOS/Fedora',
            'sudo yum install -y nodejs npm git curl wget',
            '',
            '# Arch Linux',
            'sudo pacman -S nodejs npm git curl wget base-devel',
            '',
            '# Verify installations',
            'node --version',
            'npm --version',
            'git --version'
          ],
          troubleshooting: [
            "Use NodeSource repository for latest Node.js versions",
            "Some distributions package nodejs and node separately",
            "build-essential (Ubuntu) or base-devel (Arch) provides compilation tools"
          ],
          successCriteria: "All three commands (node, npm, git) return version numbers"
        },
        {
          id: "shopify-cli",
          title: "Install Shopify CLI",
          description: "Install Shopify development tools using snap or direct download",
          commands: [
            '# Method 1: Install via snap (recommended)',
            'sudo snap install shopify',
            '',
            '# Method 2: Direct download and install',
            'curl -s https://shopify.dev/install | bash',
            '',
            '# Method 3: Manual installation for distributions without snap',
            'wget https://github.com/Shopify/shopify-cli/releases/latest/download/shopify-cli-linux-amd64.tar.gz',
            'tar -xzf shopify-cli-linux-amd64.tar.gz',
            'sudo mv shopify /usr/local/bin/',
            '',
            '# Verify installation',
            'shopify version'
          ],
          troubleshooting: [
            "Ensure /snap/bin is in your PATH for snap installations",
            "Use direct download method if snap is not available",
            "May need to add installation directory to PATH manually"
          ],
          successCriteria: "shopify version returns version information"
        },
        {
          id: "vscode",
          title: "Install Visual Studio Code",
          description: "Install VS Code using snap, package manager, or direct download",
          commands: [
            '# Method 1: Install via snap (easiest)',
            'sudo snap install --classic code',
            '',
            '# Method 2: Package manager (Ubuntu/Debian)',
            'wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg',
            'sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/',
            'sudo sh -c \'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list\'',
            'sudo apt update',
            'sudo apt install code',
            '',
            '# Method 3: Direct download (.deb package)',
            '# Visit: https://code.visualstudio.com/Download',
            '# Download .deb file and install with: sudo dpkg -i code_*.deb',
            '',
            '# Verify installation',
            'code --version'
          ],
          troubleshooting: [
            "Snap method is usually the simplest and most reliable",
            "Repository method provides automatic updates",
            "Direct download for systems without snap or specific package needs"
          ],
          successCriteria: "code --version works in terminal and VS Code opens"
        }
      ]
    }
  };