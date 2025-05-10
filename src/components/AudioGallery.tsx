import React, { useState } from 'react';
import { Upload, Play, Pause, X, ArrowLeft } from 'lucide-react';

interface AudioFile {
  id: string;
  url: string;
  title: string;
}

interface AudioGalleryProps {
  onClose: () => void;
}

export function AudioGallery({ onClose }: AudioGalleryProps) {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([
    {
      id: '1',
      url: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
      title: 'Tech House Vibes'
    },
    {
      id: '2',
      url: 'https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3',
      title: 'Hip Hop Beat'
    }
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [playing, setPlaying] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // Simulate file upload
      const newAudio: AudioFile = {
        id: Date.now().toString(),
        url: URL.createObjectURL(file),
        title: file.name
      };
      setAudioFiles([newAudio, ...audioFiles]);
    } finally {
      setIsUploading(false);
    }
  };

  const removeAudio = (id: string) => {
    setAudioFiles(audioFiles.filter(audio => audio.id !== id));
    if (playing === id) {
      setPlaying(null);
    }
  };

  const togglePlay = (id: string, url: string) => {
    const audio = document.getElementById(`audio-${id}`) as HTMLAudioElement;
    
    if (playing === id) {
      audio.pause();
      setPlaying(null);
    } else {
      if (playing) {
        const previousAudio = document.getElementById(`audio-${playing}`) as HTMLAudioElement;
        previousAudio.pause();
      }
      audio.play();
      setPlaying(id);
    }
  };

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
              src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-drum-machine-128414.svg"
              alt="Recordings" 
              className="h-8 w-8 mr-3"
            />
            <h1 className="text-3xl font-bold text-white">Audio Gallery</h1>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
          <label className="block">
            <div className="relative">
              <input
                type="file"
                className="hidden"
                accept="audio/*"
                onChange={handleFileChange}
                disabled={isUploading}
                id="audio-upload"
              />
              <label
                htmlFor="audio-upload"
                className={`flex items-center justify-center px-6 py-3 border-2 border-white rounded-lg text-white hover:bg-white/10 cursor-pointer transition-colors ${
                  isUploading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Upload className="h-6 w-6 mr-2" />
                {isUploading ? 'Uploading...' : 'Add New Recording'}
              </label>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audioFiles.map((audio) => (
          <div key={audio.id} className="relative group bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <audio id={`audio-${audio.id}`} src={audio.url} />
            <div className="flex items-center justify-between">
              <button
                onClick={() => togglePlay(audio.id, audio.url)}
                className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                {playing === audio.id ? (
                  <Pause className="h-6 w-6 text-white" />
                ) : (
                  <Play className="h-6 w-6 text-white" />
                )}
              </button>
              <div className="flex-1 mx-4">
                <p className="text-white truncate">{audio.title}</p>
              </div>
              <button
                onClick={() => removeAudio(audio.id)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}