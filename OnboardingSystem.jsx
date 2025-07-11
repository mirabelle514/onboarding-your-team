// OnboardingSystem.jsx
import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, Circle, Download, ExternalLink, Terminal, Code, Monitor, User, Target, Zap, AlertTriangle, Info, Copy, Check, FileText, Layers, HelpCircle } from 'lucide-react';

// Import documentation modules
import { PlatformSetups } from './docs/PlatformSetups';
import { RoleConfigs } from './docs/RoleConfigs';
import { ExperienceGuidance } from './docs/ExperienceGuidance';
import { DevelopmentWorkflow } from './docs/DevelopmentWorkflow';
import { RepositorySetup } from './docs/RepositorySetup';
import { GitConfiguration } from './docs/GitConfiguration';
import { VSCodeSetup } from './docs/VSCodeSetup';
import { questionnaire } from './config/questionnaire.jsx';
import { teamConfig, replacePlaceholders } from './config/team-config.js';

const OnboardingSystem = () => {
  const [currentStep, setCurrentStep] = useState('questionnaire');
  const [userProfile, setUserProfile] = useState({});
  const [personalizedDoc, setPersonalizedDoc] = useState(null);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState(null);
  const [answers, setAnswers] = useState({});

  const generatePersonalizedDoc = (userAnswers) => {
    const platform = userAnswers.platform || 'mac';
    const experience = userAnswers.experience || 'intermediate';
    const role = userAnswers.role || 'frontend';
    const tools = userAnswers.tools || [];
    const goals = userAnswers.goals || [];

    // Build sections based on user profile
    const sections = [];

    // Always include platform setup
    sections.push({
      id: 'platform',
      title: PlatformSetups[platform].title,
      type: 'setup',
      data: PlatformSetups[platform],
      estimated: PlatformSetups[platform].estimatedTime
    });

    // Include Git setup if not familiar
    if (!tools.includes('git')) {
      sections.push({
        id: 'git',
        title: GitConfiguration.title,
        type: 'setup', 
        data: GitConfiguration
      });
    }

    // Include VS Code setup if not familiar
    if (!tools.includes('vscode')) {
      sections.push({
        id: 'vscode',
        title: VSCodeSetup.title,
        type: 'setup',
        data: VSCodeSetup
      });
    }

    // Always include repository setup
    sections.push({
      id: 'repository',
      title: RepositorySetup.title,
      type: 'setup',
      data: RepositorySetup
    });

    // Include workflow if goal selected
    if (goals.includes('workflow')) {
      sections.push({
        id: 'workflow',
        title: DevelopmentWorkflow.title,
        type: 'info',
        data: DevelopmentWorkflow
      });
    }

    return {
      title: replacePlaceholders(teamConfig.welcome.title),
      subtitle: `${experience.charAt(0).toUpperCase() + experience.slice(1)} ${RoleConfigs[role].title} - ${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
      welcomeMessage: replacePlaceholders(`Welcome to ${teamConfig.team.name}! This streamlined guide is customized for your profile as a ${experience} ${RoleConfigs[role].title.toLowerCase()} on ${platform}.`),
      
      sections: sections,
      roleConfig: RoleConfigs[role],
      experienceGuidance: ExperienceGuidance[experience],
      
      estimatedTime: sections.reduce((total, section) => {
        const time = section.estimated || "15 minutes";
        const minutes = parseInt(time.match(/\d+/)?.[0] || 15);
        return total + minutes;
      }, 0)
    };
  };

  const handleAnswerChange = (questionId, value, isMultiple = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(a => a !== value)
        : [...currentAnswers, value];
      setAnswers(prev => ({ ...prev, [questionId]: newAnswers }));
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: value }));
    }
  };

  const generatePersonalizedDocument = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const doc = generatePersonalizedDoc(answers);
      setPersonalizedDoc(doc);
      setUserProfile(answers);
      setCurrentStep('onboarding');
      setIsGenerating(false);
    }, 1500);
  };

  const toggleStepCompletion = (stepId) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const copyToClipboard = async (text, commandIndex) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(commandIndex);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadGuide = () => {
    if (!personalizedDoc) return;
    
    let markdown = `# ${personalizedDoc.title}\n\n`;
    markdown += `## ${personalizedDoc.subtitle}\n\n`;
    markdown += `${personalizedDoc.welcomeMessage}\n\n`;
    markdown += `**Estimated Total Time:** ${personalizedDoc.estimatedTime} minutes\n\n`;
    
    personalizedDoc.sections.forEach((section, index) => {
      markdown += `## ${index + 1}. ${section.title}\n\n`;
      
      if (section.data.steps) {
        section.data.steps.forEach((step, stepIndex) => {
          markdown += `### ${stepIndex + 1}. ${step.title}\n\n`;
          markdown += `${step.description}\n\n`;
          
          if (step.commands) {
            markdown += `**Commands:**\n\`\`\`bash\n${step.commands.join('\n')}\n\`\`\`\n\n`;
          }
          
          markdown += `**Success:** ${step.successCriteria}\n\n`;
        });
      }
    });

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = replacePlaceholders(teamConfig.export.filename
      .replace('{teamName}', teamConfig.team.name)
      .replace('{role}', userProfile.role)
      .replace('{date}', new Date().toISOString().split('T')[0]));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetOnboarding = () => {
    setCurrentStep('questionnaire');
    setAnswers({});
    setPersonalizedDoc(null);
    setCompletedSteps(new Set());
    setUserProfile({});
    setCopiedCommand(null);
  };

  if (currentStep === 'questionnaire') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Layers className="w-10 h-10 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                {replacePlaceholders(teamConfig.welcome.title)}
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-4">
              {replacePlaceholders(teamConfig.welcome.description)}
            </p>
            <p className="text-gray-600">
              Generate a focused onboarding guide tailored to your experience, platform, and role.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {questionnaire.map((q, index) => (
              <div key={q.id} className="mb-8 last:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {q.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {q.question}
                  </h3>
                </div>

                <div className="space-y-3">
                  {q.options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type={q.type === 'multiple' ? 'checkbox' : 'radio'}
                        name={q.id}
                        value={option.value}
                        checked={q.type === 'multiple' 
                          ? (answers[q.id] || []).includes(option.value)
                          : answers[q.id] === option.value
                        }
                        onChange={() => handleAnswerChange(q.id, option.value, q.type === 'multiple')}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {option.desc}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-6 border-t">
              <button
                onClick={generatePersonalizedDocument}
                disabled={Object.keys(answers).length < 3 || isGenerating}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating Your Personalized Guide...
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5" />
                    Generate My Onboarding Guide
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'onboarding' && personalizedDoc) {
    const allSteps = personalizedDoc.sections.flatMap(section => 
      section.data.steps ? section.data.steps : []
    );
    
    const completionPercentage = Math.round((completedSteps.size / allSteps.length) * 100);

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {personalizedDoc.title}
                </h1>
                <p className="text-xl text-gray-600 mb-2">{personalizedDoc.subtitle}</p>
                <p className="text-gray-600">{personalizedDoc.welcomeMessage}</p>
                <p className="text-sm text-blue-600 mt-2">
                  Estimated time: {personalizedDoc.estimatedTime} minutes
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={downloadGuide}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Guide
                </button>
                <button
                  onClick={resetOnboarding}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Start Over
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Setup Progress</span>
                <span>{completedSteps.size} of {allSteps.length} steps completed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {personalizedDoc.sections.map((section, sectionIndex) => (
                <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Monitor className="w-6 h-6" />
                    {sectionIndex + 1}. {section.title}
                  </h2>
                  {section.estimated && (
                    <div className="text-sm text-blue-600 mb-6">
                      Estimated time: {section.estimated}
                    </div>
                  )}
                  
                  {section.data.steps && (
                    <div className="space-y-6">
                      {section.data.steps.map((step, stepIndex) => (
                        <div key={step.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start gap-4">
                            <button
                              onClick={() => toggleStepCompletion(step.id)}
                              className="mt-1 flex-shrink-0"
                            >
                              {completedSteps.has(step.id) ? (
                                <CheckCircle className="w-6 h-6 text-green-600" />
                              ) : (
                                <Circle className="w-6 h-6 text-gray-400" />
                              )}
                            </button>
                            
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-600 mb-4">{step.description}</p>
                              
                              {step.commands && (
                                <div className="mb-4">
                                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                                    <Terminal className="w-4 h-4" />
                                    Commands
                                  </h4>
                                  <div className="space-y-2">
                                    {step.commands.map((command, cmdIndex) => (
                                      <div key={cmdIndex} className="relative group">
                                        <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm pr-12">
                                          {command}
                                        </div>
                                        {command.trim() && !command.startsWith('#') && (
                                          <button
                                            onClick={() => copyToClipboard(command, `${step.id}-${cmdIndex}`)}
                                            className="absolute right-2 top-2 p-1 text-gray-400 hover:text-green-400 transition-colors"
                                            title="Copy command"
                                          >
                                            {copiedCommand === `${step.id}-${cmdIndex}` ? (
                                              <Check className="w-4 h-4" />
                                            ) : (
                                              <Copy className="w-4 h-4" />
                                            )}
                                          </button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {step.successCriteria && (
                                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                  <h4 className="font-medium text-green-900 mb-1 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" />
                                    Success Criteria
                                  </h4>
                                  <p className="text-green-800 text-sm">{step.successCriteria}</p>
                                </div>
                              )}
                              
                              {step.troubleshooting && step.troubleshooting.length > 0 && (
                                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                  <h4 className="font-medium text-yellow-900 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4" />
                                    Troubleshooting
                                  </h4>
                                  <ul className="text-yellow-800 text-sm space-y-1">
                                    {step.troubleshooting.map((tip, tipIndex) => (
                                      <li key={tipIndex}>• {tip}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.data.terminals && (
                    <div className="space-y-4">
                      <p className="text-gray-600">{section.data.description}</p>
                      {section.data.terminals.map((terminal, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">{terminal.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{terminal.purpose}</p>
                          <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm">
                            {terminal.commands[0]}
                          </div>
                          {terminal.note && (
                            <p className="text-xs text-gray-500 mt-2 italic">{terminal.note}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Role Info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  {personalizedDoc.roleConfig.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{personalizedDoc.roleConfig.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">VS Code Extensions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {personalizedDoc.roleConfig.extensions.slice(0, 3).map((ext, index) => (
                      <li key={index}>• {ext}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Learning Path</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {personalizedDoc.roleConfig.learningPath.slice(0, 3).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Experience Tips */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  {personalizedDoc.experienceGuidance.title}
                </h3>
                <div className="space-y-2">
                  {personalizedDoc.experienceGuidance.tips.slice(0, 3).map((tip, index) => (
                    <div key={index} className="text-sm text-gray-600 p-2 bg-blue-50 rounded">
                      💡 {tip}
                    </div>
                  ))}
                </div>
              </div>

              {/* First Tasks */}
              {personalizedDoc.roleConfig.firstTasks && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Your First Tasks
                  </h3>
                  <div className="space-y-3">
                    {personalizedDoc.roleConfig.firstTasks.map((task, index) => (
                      <div key={index} className="p-3 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 text-sm">{task.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{task.description}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <span className={`px-2 py-1 rounded-full ${
                            task.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            task.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {task.difficulty}
                          </span>
                          <span className="text-gray-500">{task.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading your personalized onboarding...</p>
      </div>
    </div>
  );
};

export default OnboardingSystem;