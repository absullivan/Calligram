import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AboutGalleryProps {
  onClose: () => void;
}

export function AboutGallery({ onClose }: AboutGalleryProps) {
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
              src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-magnifying-glass-6871189.svg"
              alt="About/Credits"
              className="h-8 w-8 mr-3 text-white filter invert"
            />
            <h1 className="text-3xl font-bold text-white">About/Credits</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-white text-lg leading-relaxed">
              Calligram is a digital sanctuary for analog enthusiasts, where the tactile charm of vintage technology meets modern digital convenience. Our platform celebrates the art of physical media - from the mechanical precision of typewriters to the chemical magic of film photography, and from the magnetic warmth of audio cassettes to the visual poetry of Super 8 films. We provide a space where these timeless formats can be preserved, shared, and appreciated in the digital age, creating a bridge between past and present technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}