import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const CommandBlock = ({ commands, title, description }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!commands || commands.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-gray-600" />
          <h4 className="font-medium text-gray-900">{title}</h4>
        </div>
      )}
      
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
      
      <div className="space-y-2">
        {commands.map((command, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-between bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <code className="flex-1 break-all">{command}</code>
              <button
                onClick={() => copyToClipboard(command, index)}
                className="ml-4 p-2 hover:bg-gray-800 rounded transition-colors duration-200"
                title="Copy command"
              >
                {copiedIndex === index ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            {copiedIndex === index && (
              <div className="absolute -top-8 right-0 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Copied!
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandBlock;
