import React from 'react';
import { CheckCircle, Circle, AlertTriangle, Info } from 'lucide-react';
import CommandBlock from './CommandBlock';

const StepCard = ({ 
  step, 
  isCompleted, 
  onToggleComplete, 
  stepNumber,
  showCommands = true 
}) => {
  const getStatusIcon = () => {
    if (isCompleted) {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
    if (step.warning) {
      return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
    }
    return <Circle className="w-6 h-6 text-gray-400" />;
  };

  const getStatusColor = () => {
    if (isCompleted) return 'border-green-200 bg-green-50';
    if (step.warning) return 'border-yellow-200 bg-yellow-50';
    return 'border-gray-200 bg-white';
  };

  return (
    <div className={`border rounded-lg p-6 transition-all duration-200 ${getStatusColor()}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {getStatusIcon()}
        </div>
        
        <div className="flex-1 space-y-4">
          {/* Step Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-500">
                  Step {stepNumber}
                </span>
                {step.estimatedTime && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    ~{step.estimatedTime}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
            </div>
            
            {step.id && (
              <button
                onClick={() => onToggleComplete(step.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isCompleted
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isCompleted ? 'Completed' : 'Mark Complete'}
              </button>
            )}
          </div>
          
          {/* Step Description */}
          <p className="text-gray-700 leading-relaxed">
            {step.description}
          </p>
          
          {/* Commands */}
          {showCommands && step.commands && step.commands.length > 0 && (
            <CommandBlock 
              commands={step.commands}
              title="Commands to run"
            />
          )}
          
          {/* Success Criteria */}
          {step.successCriteria && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Success Criteria</h4>
                  <p className="text-sm text-blue-800">{step.successCriteria}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Troubleshooting */}
          {step.troubleshooting && step.troubleshooting.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-900 mb-2">Troubleshooting</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    {step.troubleshooting.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Additional Notes */}
          {step.notes && (
            <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
              <strong>Note:</strong> {step.notes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
