import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { PhotoGallery } from './PhotoGallery';
import { AudioGallery } from './AudioGallery';
import { VideoGallery } from './VideoGallery';
import { TextGallery } from './TextGallery';
import { CodeGallery } from './CodeGallery';
import { ContactGallery } from './ContactGallery';
import { AboutGallery } from './AboutGallery';

interface DashboardProps {
  onSignOut: () => void;
}

export function Dashboard({ onSignOut }: DashboardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username] = useState('User');
  const [currentView, setCurrentView] = useState<string>('home');

  const handleLogoClick = () => {
    window.location.reload();
  };

  const menuItems = [
    { 
      icon: () => (
        <img 
          src="/noun-lomo-lc-a-70634.svg"
          alt="Photos" 
          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        />
      ),
      label: 'Photos',
      onClick: () => setCurrentView('photos')
    },
    { 
      icon: () => (
        <img 
          src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-drum-machine-128414.svg"
          alt="Recordings" 
          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        />
      ),
      label: 'Recordings',
      onClick: () => setCurrentView('recordings')
    },
    { 
      icon: () => (
        <img 
          src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-lomokino-camera-765557.svg"
          alt="Videos" 
          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        />
      ),
      label: 'Videos',
      onClick: () => setCurrentView('videos')
    },
    { 
      icon: () => (
        <img 
          src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-typewriter-942314.svg"
          alt="Texts" 
          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        />
      ),
      label: 'Texts',
      onClick: () => setCurrentView('texts')
    },
    { 
      icon: () => (
        <img 
          src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-computer-7234412.svg"
          alt="Code" 
          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        />
      ),
      label: 'Code',
      onClick: () => setCurrentView('code')
    },
    { 
      icon: () => (
        <img 
          src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-walkie-talkie-919482.svg"
          alt="Contact" 
          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        />
      ),
      label: 'Contact',
      onClick: () => setCurrentView('contact')
    },
    { 
      icon: () => (
        <img 
          src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-magnifying-glass-6871189.svg"
          alt="About/Credits" 
          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        />
      ),
      label: 'About/Credits',
      onClick: () => setCurrentView('about')
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ 
        backgroundImage: 'url("/images/CKB.jpg")',
        backgroundBlendMode: 'normal'
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={handleLogoClick}
                  className="flex items-center focus:outline-none hover:opacity-80 transition-opacity"
                  aria-label="Refresh page"
                >
                  <img 
                    src="/noun-lomo-lc-a-70634.svg"
                    alt="App Logo" 
                    className="w-8 h-8"
                  />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    aria-expanded={isMenuOpen}
                    aria-haspopup="true"
                    aria-label="Toggle menu"
                  >
                    <img 
                      src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-helm-wheel-7285779.svg"
                      alt="Menu"
                      className="h-8 w-8"
                    />
                  </button>

                  {isMenuOpen && (
                    <div 
                      className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="py-1" role="none">
                        {menuItems.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              item.onClick();
                              setIsMenuOpen(false);
                            }}
                            className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {typeof item.icon === 'function' ? 
                              item.icon() : 
                              <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                            }
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={onSignOut}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <LogOut className="h-8 w-8 text-white" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {currentView === 'photos' ? (
            <PhotoGallery onClose={() => setCurrentView('home')} />
          ) : currentView === 'recordings' ? (
            <AudioGallery onClose={() => setCurrentView('home')} />
          ) : currentView === 'videos' ? (
            <VideoGallery onClose={() => setCurrentView('home')} />
          ) : currentView === 'texts' ? (
            <TextGallery onClose={() => setCurrentView('home')} />
          ) : currentView === 'code' ? (
            <CodeGallery onClose={() => setCurrentView('home')} />
          ) : currentView === 'contact' ? (
            <ContactGallery onClose={() => setCurrentView('home')} />
          ) : currentView === 'about' ? (
            <AboutGallery onClose={() => setCurrentView('home')} />
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Empty main content area */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}