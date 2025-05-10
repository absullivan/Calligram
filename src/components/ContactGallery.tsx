import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ContactGalleryProps {
  onClose: () => void;
}

export function ContactGallery({ onClose }: ContactGalleryProps) {
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
              src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-walkie-talkie-919482.svg"
              alt="Contact"
              className="h-8 w-8 mr-3 filter invert"
            />
            <h1 className="text-3xl font-bold text-white">Contact</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
            <a
              href="https://mastodon.social/@absullivan"
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Mastodon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}