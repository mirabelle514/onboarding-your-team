import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const ProgressTracker = ({ sections, completedSteps, totalSteps }) => {
  const completedCount = completedSteps.size;
  const progressPercentage = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Progress</h3>
        <span className="text-sm text-gray-500">
          {completedCount} of {totalSteps} steps completed
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-osea-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      {/* Sections Progress */}
      <div className="space-y-3">
        {sections.map((section) => {
          const sectionSteps = section.data.steps?.length || 0;
          const completedSectionSteps = section.data.steps?.filter(step => 
            completedSteps.has(step.id)
          ).length || 0;
          const isCompleted = completedSectionSteps === sectionSteps && sectionSteps > 0;
          
          return (
            <div key={section.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : completedSectionSteps > 0 ? (
                  <Clock className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
                <span className="font-medium text-gray-700">{section.title}</span>
              </div>
              <span className="text-sm text-gray-500">
                {completedSectionSteps}/{sectionSteps}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Completion Status */}
      {progressPercentage === 100 && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-medium text-green-800">Onboarding Complete!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            You've successfully completed all setup steps. You're ready to start developing!
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
