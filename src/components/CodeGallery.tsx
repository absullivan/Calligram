import React from 'react';
import { ArrowLeft, Github } from 'lucide-react';

interface CodeGalleryProps {
  onClose: () => void;
}

export function CodeGallery({ onClose }: CodeGalleryProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onClose}
            className="flex items-center text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            Back
          </button>
          <div className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-computer-7234412.svg"
              alt="Code" 
              className="h-8 w-8 mr-3"
            />
            <h1 className="text-3xl font-bold text-white">Code Gallery</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Check out my projects</h2>
            <a
              href="https://github.com/absullivan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              <Github className="h-6 w-6 mr-2" />
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}